import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import { getTeams, deleteTeam } from"../../actions/teamActions";


class AdminTeams extends Component {

    state = {
        isloading: true,
        teams:[]
    }

    componentDidMount(){       
        //   this.props.getPlayers();
           this.props.getTeams();
    }

    onDeleteClick = id => {
        console.log("borro" + id);
        if(window.confirm('Seguro que deseas borrar este registro?')){
            this.props.deleteMatch(id);
        }     
        //this.props.deletePlayer(id);
    };    

    onDeleteClick = id => {
        console.log("borro" + id);
        if(window.confirm('Seguro que deseas borrar este registro?')){
            this.props.deleteTeam(id);
        }     
        //this.props.deletePlayer(id);
    };      

    render() {

        const { teams } = this.props.team;
        
        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Estadio</TableCell>
                                    <TableCell></TableCell>                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { teams ?
                                    teams.map((team,i)=>(
                                        <TableRow key={i}>
                                            <TableCell>
                                                {team.name}
                                            </TableCell>
                                            <TableCell>
                                                {team.stadium}
                                            </TableCell>
                                            <TableCell>     
                                                <Link to={`/admin_teams/editteam/${team.id}`}>
                                                <button>Editar</button> 
                                                </Link>
                                            </TableCell>                                             
                                            <TableCell>
                                                <button 
                                                   onClick={this.onDeleteClick.bind(
                                                   this,
                                                   team.id
                                                     )} >Borrar
                                                </button>                                       
                                            </TableCell>                                           
                                        </TableRow>
                                    ))
                                    :null
                                }
                            </TableBody>
                        </Table>
                    </Paper>
    
                </div>
            </AdminLayout>
        );
    }
}

const mapStateToProps = state => ({
    team: state.team,
    errors: state.errors
});
  
  
export default connect(
    mapStateToProps,
    { deleteTeam, getTeams }
)(AdminTeams);