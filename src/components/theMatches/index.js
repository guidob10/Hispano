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
        this.props.getMatches();

    }

    showPlayed = (played) => {
        const list = this.state.matches.filter((match)=>{
            return match.final === played
        });
        
        this.setState({
            filterMatches: played === 'All' ? this.state.matches : list,
            playedFilter: played,
            resultFilter: 'All'
        })
    }

    showResult = (result) => {
        const list = this.state.matches.filter((match)=>{
            return match.result === result
        });
        
        this.setState({
            filterMatches: result === 'All' ? this.state.matches : list,
            playedFilter: 'All',
            resultFilter: result
        })
    }


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
                                        onClick={()=> this.showPlayed('All')}
                                    >
                                        Todos
                                    </div>
                                    <div className={`option ${state.playedFilter === 'Yes'?'active':''}`}
                                        onClick={()=> this.showPlayed('Yes')}>
                                        Jugado
                                    </div>
                                    <div className={`option ${state.playedFilter === 'No'?'active':''}`}
                                        onClick={()=> this.showPlayed('No')}>
                                        No jugado
                                    </div>
                                </div>
                            </div>
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
                                    {/*
                                    <div className={`option ${state.resultFilter === 'D'?'active':''}`}
                                        onClick={()=> this.showResult('D')}>
                                        D
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                        {/* <MatchesList matches={state.filterMatches}/>*/}
                        <MatchesList matches={matches}/>
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