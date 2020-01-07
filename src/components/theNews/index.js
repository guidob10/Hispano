import React, { Component } from 'react';
import Stripes from '../../resources/images/stripes.png';

import Noticia from './noticia';
import baseUrl from '../../config/axiosURL';
 
const baseUrlApi = baseUrl; 

class TheNews extends Component {


    state = { 
        noticias: [],
        per: 2,
        page: 0,
        totalPages: null,
        scrolling: false,
      }

     componentWillMount() {      
      this.loadNoticias();
      this.scrollListener = window.addEventListener('scroll',(e) => {
        this.handleScroll(e)
      })
    }    

    handleScroll = (e) => {

      const {scrolling, totalPages, page} = this.state;
      if (scrolling) return 
      if (totalPages <= page) return       

      const lastLi = document.querySelector('ul.noticias > li:last-child')
      const lastLiOffset =  lastLi.offsetTop + lastLi.clientHeight
      const pageOffset = window.pageYOffset + window.innerHeight
      var bottomOffset  = 20

      if (pageOffset > lastLiOffset - bottomOffset){
         this.loadMore()
      }
    }

    loadNoticias = () => {
      const { per, page, noticias } = this.state;
       fetch(baseUrlApi+`/news?page=${page}&size=${per}`)
        .then((response) => {
          return response.json()
        })
        .then((news) => {
          this.setState({
             noticias: [...noticias, ...news.content ],
             scrolling : false,
             totalPages : news.totalPages,
            })
        })

    }

    loadMore = () => {
      if (this.state.totalPages > this.state.page){
        this.setState(prevState =>  ({
         page: prevState.page + 1,
         scrolling: true,
        }), this.loadNoticias)
      }
    }
 

  render() {
  
    console.log(this.state.noticias);
    if (this.state.noticias) {    
        return (
          <div className="the_team_container"
          style={{
              background:`url(${Stripes}) repeat`
          }}
      >
            <ul className="noticias"> 
                {
                    this.state.noticias.map(noticia => 
                        <li key={noticia.id}>
                          <Noticia {...noticia} />
                        </li>            
                    )
                }          
            </ul>
            <a onClick={this.loadMore}></a>
          </div>                
      ) 
    }
    else return <div>Sin datos</div>;     
  }
}

export default TheNews;
