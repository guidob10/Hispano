import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { connect } from "react-redux";
import PlayerCard from '../ui/playerCard';
import Fade from 'react-reveal/Fade';
import Stripes from '../../resources/images/stripes.png';


class TheShop extends Component {

    state = {

    }

    componentDidMount(){
     //   this.props.getMatches();
    }

    showProductsByCategory = (products,position) => (
      products ?
        products.map((product,i)=>{
          console.log("asd");
          return product.position === position ?
              <Fade left delay={i*20} key={i}>
                  <div className="item">
                      <PlayerCard
                          number={product.number}
                          name={product.name}
                          lastname={product.lastname}
                          bck={this.testVarible+product.defaultImg}
                      />
                  </div>
              </Fade>
          :null
      })
     :null
    )    


  render() {
  // const { players } = this.props.player; 
    const products = [];
    return (
        <div className="the_team_container"
            style={{
                background:`url(${Stripes}) repeat`
            }}
        >
            { !this.state.loading ?
                <div>
                    <div className="team_category_wrapper">
                        <div className="title">Productos</div>
                        <div className="team_cards">
                            {this.showProductsByCategory(products,'Base')}
                        </div>
                    </div>
                </div>
                :null
            }
            
        </div>
    );
  }
}

export default TheShop;
