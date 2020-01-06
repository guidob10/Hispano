import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';
import { connect } from "react-redux";
import { getNews} from "../../actions/newActions";
import { deleteNew } from "../../actions/newActions";
//import DataTable from 'react-data-table-component';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import { Link } from 'react-router-dom';


class AdminNews extends Component {

    state = {
        isloading: true,
        news:[],
        totalPages: 0,
        totalElements: 5, 
        activePage: 0  
    }

    componentDidMount(){       
        if (this.activePage == null){
            this.activePage = 0;
            this.totalElements = 5;
        }    
       // this.props.getNews(this.activePage,this.totalElements);
        this.props.getNews();
 
    }

   
/* grilla nueva funciona, pero queda comentada para agregar luego. DataTable
    render() {
        //const dataf = [{ id: 1, title: 'Conan the Barbarian', year: '1982' },{ id: 2, title: '  the Barbarian', year: '1982' } ];
        var dataf = [];
        const { news } = this.props.new;
        dataf  = news.content;
        const columns = [
            {
              name: 'Id',
              selector: 'id',
              sortable: true,
            },
            {
              name: 'Title',
              selector: 'title',
              sortable: true,
              right: true,
            },
            
          ];
            return (
            
                <AdminLayout>  
 
                    <DataTable
                        title="Noticias"
                        columns={columns}
                        data={dataf}
                        selectableRows // add for checkbox selection
                        onSelectedRowsChange={this.updateState}
                     />                          
                </AdminLayout>                
            );     
    }  
}
*/
onDeleteClick = id => {
    if(window.confirm('Seguro que deseas borrar este registro?')){        
        this.props.deleteNew(id);
    }     
};    

render() {

    const { news } = this.props.new;
    this.news = this.props.new.news;
    // el estado original de matches es un array vacio, entra la primera vez, despues se pisa y no da 0 (da undefined)
    if (news.length === 0) {
        return (
            <div>No Data</div>
        )
    }    

    return (
        <AdminLayout>
            <div>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Titulo</TableCell>
                                <TableCell>Descripcion</TableCell>                                   
                                <TableCell> </TableCell>                                                                       
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { news ?
                                news.content.map((neww,i)=>(
                                    <TableRow key={i}>
                                        <TableCell>
                                            {neww.id}
                                        </TableCell>
                                        <TableCell>
                                            {neww.title}
                                        </TableCell>
                                        <TableCell>
                                            {neww.description}
                                        </TableCell>                                            
                                                 
                                        <TableCell>
                                            <button 
                                               onClick={this.onDeleteClick.bind(
                                               this,
                                               neww.id
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
    new: state.new,
    errors: state.errors
  });
   
  export default connect(
    mapStateToProps,
    { getNews, deleteNew }
  )(AdminNews);

 