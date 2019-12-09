import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import LeagueTable from './table';
import MatchesList from './matchesList';
import { connect } from "react-redux";
import { getMatches } from"../actions/matchActions";

class TheMatches extends Component {

    state = {
        loading: true,
        matches:[],
        filterMatches:[],
        playedFilter:'All',
        resultFilter:'All'
    }

    componentDidMount(){
     //   this.props.getMatches();
        this.props.getMatches(0,10);

    }

    componentWillReceiveProps(nextProps) {
        // Any time props changes, update state.
        if (nextProps.matches !== this.props.match.matches) {
          this.setState({
            matches: nextProps.match.matches,
            filterMatches: nextProps.match.matches.content
          });
        }
      }

    showAll = (matches, played) => {
        const list = matches.content.filter((match)=>{
            return match
        });

        this.setState({
            filterMatches: list,
            matches : list,
            playedFilter: played,
            resultFilter: 'All'
        })
    }

    showPlayed = (matches, played) => {
        const list = matches.content.filter((match)=>{
            return match.resultLocal > '0' 
        });
        this.setState({
            filterMatches: played === 'All' ?  matches : list,
            playedFilter: played,
            resultFilter: 'All'
        })
    }

    showNoPlayed = (matches, played) => {
            const list = matches.content.filter((match)=>{
            return match.resultLocal === '0' 
        });
        console.log("asd"+matches)
        console.log(matches)
        this.setState({
            filterMatches: played === 'All' ?  matches : list,
            playedFilter: played,
            resultFilter: 'All'
        })
    }    
/*
    showResult = (result) => {
        const list = this.state.matches.filter((match)=>{
            return match.result === result
        });
        
        this.setState({
            filterMatches: result === 'All' ? this.state.matches : list,
            playedFilter: 'All',
            resultFilter: result
        })
    }*/


    render() {
        const state = this.state;
        const { matches } = this.props.match;
        return (
            <div className="the_matches_container">
                <div className="the_matches_wrapper">
                    <div className="left">
                        <div className="match_filters">
                            <div className="match_filters_box">
                                <div className="tag">
                                    Mostrar Partidos
                                </div>
                                <div className="cont">
                                    <div className={`option ${state.playedFilter === 'All'?'active':''}`}
                                        onClick={()=> this.showAll(matches,'All')}
                                    >
                                        Todos
                                    </div>
                                    <div className={`option ${state.playedFilter === 'Yes'?'active':''}`}
                                        onClick={()=> this.showPlayed(matches,'Yes')}>
                                        Jugado
                                    </div>
                                    <div className={`option ${state.playedFilter === 'No'?'active':''}`}
                                        onClick={()=> this.showNoPlayed(matches,'No')}>
                                        No jugado
                                    </div>
                                </div>
                            </div>
                            {/*  
                            <div className="match_filters_box">
                                <div className="tag">
                                    Resultado
                                </div>
                                <div className="cont">
                                    <div className={`option ${state.resultFilter === 'All'?'active':''}`}
                                        onClick={()=> this.showResult('All')}
                                    >
                                        Todos
                                    </div>
                                    <div className={`option ${state.resultFilter === 'W'?'active':''}`}
                                        onClick={()=> this.showResult('W')}>
                                        V
                                    </div>
                                    <div className={`option ${state.resultFilter === 'L'?'active':''}`}
                                        onClick={()=> this.showResult('L')}>
                                        D
                                    </div>
 
                                </div>
                            </div>*/}
                        </div>
                         <MatchesList matches={state.filterMatches}/>
                    </div>
                    <div className="right">
                        <LeagueTable/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    match: state.match,
    errors: state.errors
  });
  
  
  export default connect(
    mapStateToProps,
    {getMatches }
  )(TheMatches);