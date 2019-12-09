import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { getMatches, deleteMatch } from"../../actions/matchActions";
import Pagination from "react-js-pagination";


class AdminMatches extends Component {

    state = {
        isloading: true,
        matches:[],
        totalPages: 0,
        totalElements: 5, 
        activePage: 0  
    }

    componentDidMount(){       
        if (this.activePage == null){
            this.activePage = 0;
            this.totalElements = 5;
        }    
        console.log(`fff ${this.activePage}`);
        this.props.getMatches(this.activePage,this.totalElements);
    }

    onDeleteClick = id => {
        console.log("borro" + id);
        if(window.confirm('Seguro que deseas borrar este registro?')){
            this.props.deleteMatch(id);
        }     
    };   

    handlePageChange(activePageNumber) {
        console.log(`active page is ${activePageNumber-1}`);
        this.setState({activePage: activePageNumber-1});  
        this.props.getMatches(activePageNumber-1,this.totalElements);              
    };        

    render() {

    const { matches } = this.props.match;
    this.matches = this.props.match.matches;
    // el estado original de matches es un array vacio, entra la primera vez, despues se pisa y no da 0 (da undefined)
    if (matches.length === 0) {
        return (
            <div>No Data</div>
        )
    }
    if (1  > 0  ) { 
        console.log( matches );
        return (
        
            <AdminLayout>  
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Fecha</TableCell>
                                    <TableCell>Equipo Local</TableCell>
                                    <TableCell>Equipo Visita</TableCell>                                                                        
                                    <TableCell>Resultado</TableCell>                                    
                                    <TableCell>Final</TableCell>
                                    <TableCell></TableCell>                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { this.matches ?
                                    this.matches.content.map((match,i)=>(
                                        <TableRow key={i}>
                                            <TableCell>
                                                {match.date}
                                            </TableCell>
                                            <TableCell>
                                                {match.teamLocal.name}
                                            </TableCell>
                                            <TableCell>
                                                {match.teamAway.name}
                                            </TableCell>                                                                                        
                                            <TableCell>
                                                {match.resultLocal} <strong>-</strong> {match.resultAway}
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
                    </div> 
                <div>  
                <Pagination 
                    activePage={this.state.activePage}
                    // totalItemsCount = cantidad de partidos que hay 
                    totalItemsCount={100}                       
                    // itemsCountPerPage = Cantidad que muestro por pagina.
                    itemsCountPerPage={5}      
                    onChange={this.handlePageChange.bind(this)}                        
                />  
                               
                </div>     
           
            </AdminLayout> 
              
        ); 
    }else 
        return <div/>
    }  
}

const mapStateToProps = state => ({
    match: state.match,
    errors: state.errors
  });
  
  
  export default connect(
    mapStateToProps,
    { deleteMatch, getMatches }
  )(AdminMatches);