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
import { deletePlayer} from "../../actions/playerActions";
import { getPlayers } from"../../actions/playerActions";

class AdminPlayers extends Component {

    state = {
        isloading: true,
        players:[]
    }
    
    componentDidMount(){       
        this.props.getPlayers();
    }

    onDeleteClick = id => {
        if(window.confirm('Seguro que deseas borrar este registro?')){
            this.props.deletePlayer(id);
        }     
    };    

    render() {

        const { players } = this.props.player;

        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Posicion</TableCell>
                                    <TableCell>Numero</TableCell>                                   
                                    <TableCell>Fecha de Nacimiento</TableCell>                                    
                                    <TableCell> </TableCell>   
                                    <TableCell> </TableCell>                                                                       
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { players ?
                                    players.map((player,i)=>(
                                        <TableRow key={i}>
                                            <TableCell>
                                                {player.name}
                                            </TableCell>
                                            <TableCell>
                                                {player.position}
                                            </TableCell>
                                            <TableCell>
                                                {player.registrationNumber}
                                            </TableCell>
                                            <TableCell>
                                                {player.dayBirth}
                                            </TableCell>                                            
                                            <TableCell>     
                                                <Link to={`/admin_players/editplayer/${player.id}`}>
                                                <button>Editar</button> 
                                                </Link>
                                            </TableCell> 
                                                     
                                            <TableCell>
                                                <button 
                                                   onClick={this.onDeleteClick.bind(
                                                   this,
                                                   player.id
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
    player: state.player,
    errors: state.errors
});
  
  
export default connect(
    mapStateToProps,
    { deletePlayer, getPlayers }
 )(AdminPlayers);