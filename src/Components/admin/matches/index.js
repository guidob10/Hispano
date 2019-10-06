import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../hoc/adminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

//import { firebaseMatches } from '../../../firebase';
//import { firebaseLooper, reverseArray } from '../../ui/misc';
import { connect } from "react-redux";
import { getMatches, deleteMatch } from"../../actions/matchActions";


class AdminMatches extends Component {

    state = {
        isloading: true,
        matches:[]
    }

    componentDidMount(){       
        //   this.props.getPlayers();
           this.props.getMatches();
    }

    onDeleteClick = id => {
        console.log("borro" + id);
        if(window.confirm('Seguro que deseas borrar este registro?')){
            this.props.deleteMatch(id);
        }     
        //this.props.deletePlayer(id);
    };    

    render() {

        const { matches } = this.props.match;
        
        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Fecha</TableCell>
                                    <TableCell>Resultado</TableCell>
                                    <TableCell>Final</TableCell>
                                    <TableCell></TableCell>                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { matches ?
                                    matches.map((match,i)=>(
                                        <TableRow key={i}>
                                            <TableCell>
                                                {match.date}
                                            </TableCell>
                                            <TableCell>
                                                {match.result} <strong>-</strong> {match.resultLocal}
                                            </TableCell>
                                            <TableCell>
                                                { match.final === "Yes" ?
                                                    <span className="matches_tag_red">Final</span>
                                                    :
                                                    <span className="matches_tag_grenn">Not played yet</span>
                                                } 
                                            </TableCell>
                                            <TableCell>
                                                <Link to={`/admin_matches/editmatch/${match.id}`}>
                                                <button>Editar</button> 

                                                    {match.away} <strong>-</strong> {match.local}
                                                </Link>
                                            </TableCell>                                            
                                        </TableRow>
                                    ))
                                    :null
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                    {/*
                    <div className="admin_progress">
                        { this.state.isloading ?
                            <CircularProgress thickness={7} style={{color:'#98c5e9'}}/>
                            :''
                        }
                    </div>   */ }
                </div>
            </AdminLayout>
        );
    }
}

//export default AdminMatches;
const mapStateToProps = state => ({
    match: state.match,
    errors: state.errors
  });
  
  
  export default connect(
    mapStateToProps,
    { deleteMatch, getMatches }
  )(AdminMatches);