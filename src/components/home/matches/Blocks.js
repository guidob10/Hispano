import React, { Component } from 'react';


import MatchesBlock from '../../ui/matches_block';
import Slide from 'react-reveal/Slide'

class Blocks extends Component {

    state = {
        matches:[]
    }
 
    componentDidMount(){

    }


    showMatches = (matches) => (
        matches ?
            matches.map((match)=>(
                <Slide bottom key={match.id}>
                    <div className="item">
                        <div className="wrapper">
                            <MatchesBlock match={match}/>
                        </div>
                    </div>
                </Slide>
            ))
        :null
    )


    render() {
        console.log(this.state)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;