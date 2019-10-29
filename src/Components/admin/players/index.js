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

//import { firebaseMatches } from '../../../firebase';
//import { firebaseLooper, reverseArray } from '../../ui/misc';
import { connect } from "react-redux";
import { deletePlayer} from "../../actions/playerActions";
import { getPlayers } from"../../actions/playerActions";

class AdminPlayers extends Component {

    state = {
        isloading: true,
        players:[]
    }
    
    componentDidMount(){       
     //   this.props.getPlayers();
        this.props.getPlayers();

/*
        fetch('http://localhost:8081/players')
        .then((response) => {
          return response.json()
        })
        .then((players) => {
          this.setState({ players: players })
          console.log(this.state.players);
          console.log(this.state.player);
        })*/
    }

    onDeleteClick = id => {
        console.log("borro" + id);
        if(window.confirm('Seguro que deseas borrar este registro?')){
            this.props.deletePlayer(id);
        }     
        //this.props.deletePlayer(id);
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
                                    <TableCell>Fecha de Nacimiento</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Valor</TableCell>
                                    <TableCell>Posicion</TableCell>
                                    <TableCell> </TableCell>   
                                    <TableCell> </TableCell>                                                                       
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { players ?
                                    players.map((player,i)=>(
                                        <TableRow key={i}>
                                            <TableCell>
                                                {player.dayBirth}
                                            </TableCell>
                                            <TableCell>
                                                {player.name}
                                            </TableCell>
                                            <TableCell>
                                                {player.value}
                                            </TableCell>
                                            <TableCell>
                                                {player.position}
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

//export default AdminPlayers;
/*
const mapStateToProps = state => ({
    errors: state.errors
  });
*/
  const mapStateToProps = state => ({
    player: state.player,
    errors: state.errors
  });
  
  
  export default connect(
    mapStateToProps,
    { deletePlayer, getPlayers }
  )(AdminPlayers);