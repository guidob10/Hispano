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

import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

class AdminPlayers extends Component {

    state = {
        isloading: true,
        players:[]
    }

    componentDidMount(){
       
        fetch('http://localhost:8081/players')
        .then((response) => {
          return response.json()
        })
        .then((players) => {
          this.setState({ players: players })
          console.log(this.state.players);
          console.log(this.state.player);

        })

      //  const url = 'http://localhost:8081/players';

     //   const respuesta = await fetch(url);
     //   const players = await respuesta.json();

             
   //  console.log(this.players);
    }


    render() {
        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Value</TableCell>
                                    <TableCell>Number</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { this.state.players ?
                                    this.state.players.map((player,i)=>(
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
                                                <Link to={`/admin_players/add_players/${player.id}`}>
                                                   11    
                                                </Link>
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

export default AdminPlayers;