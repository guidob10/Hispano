
import React, { Component } from 'react';
import PlayerCard from '../ui/playerCard';
import Fade from 'react-reveal/Fade';

import Stripes from '../../resources/images/stripes.png';
// import { firebasePlayers, firebase } from '../../firebase';
import { firebaseLooper } from '../ui/misc';
import { Promise } from 'core-js';
import { getPlayers } from"../actions/playerActions";
import { connect } from "react-redux";
import baseUrl from '../../config/axiosURL';
 
const baseUrlApi = baseUrl;

class TheTeam extends Component {
    
    constructor(props) {
        super(props);
       // this.onMove = this.onMove.bind(this);
        this.testVarible= baseUrlApi; // no funca ver como hacer
        //ver como poner tipo webapps/output ver como deployar en prod
    }    
    
    state = {
        loading:false,
        players:[]
    }


    componentDidMount(){
        this.props.getPlayers();
         
        /*
        firebasePlayers.once('value').then(snapshot =>{
            const players = firebaseLooper(snapshot);
            let promises = [];
            
            for(let key in players){
                promises.push(
                    new Promise((resolve,reject)=>{
                        firebase.storage().ref('players')
                        .child(players[key].image).getDownloadURL()
                        .then( url => {
                            players[key].url = url;
                            resolve();
                        })
                    })
                )
            }

            Promise.all(promises).then(()=>{
                this.setState({
                    loading: false,
                    players
                })
            })



        }) */
    }

    showplayersByCategory = (players,position) => (
        //this.state.players ? 
            players ?
                players.map((player,i)=>{
            //this.state.players.map((player,i)=>{
                console.log("asd");
                return player.position === position ?
                    <Fade left delay={i*20} key={i}>
                        <div className="item">
                            <PlayerCard
                                number={player.number}
                                name={player.name}
                                lastname={player.lastname}
                                bck={this.testVarible+player.defaultImg}
                            />
                        </div>
                    </Fade>
                :null
            })
           :null
    )


    render() {
        const { players } = this.props.player; 

        return (
            <div className="the_team_container"
                style={{
                    background:`url(${Stripes}) repeat`
                }}
            >
                { !this.state.loading ?
                    <div>
                        <div className="team_category_wrapper">
                            <div className="title">Bases</div>
                            <div className="team_cards">
                                {this.showplayersByCategory(players,'Base')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">Aleros</div>
                            <div className="team_cards">
                                {this.showplayersByCategory(players,'Alero')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">Pivots</div>
                            <div className="team_cards">
                                {this.showplayersByCategory(players,'Pivot')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">Dt</div>
                            <div className="team_cards">
                                {this.showplayersByCategory(players,'Dt')} 
                            </div>
                        </div>

                    </div>
                    :null
                }
                
            </div>
        );
    }
}

//export default TheTeam;
const mapStateToProps = state => ({
    player: state.player,
    errors: state.errors
  });
  
  
  export default connect(
    mapStateToProps,
    { getPlayers }
  )(TheTeam);