import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTeam } from "../../actions/teamActions";

class AddTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      stadium: '',
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleChange(event) { 
    this.setState({ [event.target.name]: event.target.value  });
  }
  

  handleChangeCombo = selectedOption => {
       this.setState( {   position : selectedOption.label})
   };

  handleSubmit(event) {
    event.preventDefault();

   const newTeam = {
    name: this.state.name,
    stadium: this.state.stadium
   };
   this.props.createTeam(newTeam, this.props.history);   
 
  }


  render() {
    const {  name, stadium } = this.state;
    
    let pageTitle;
    if(this.state.id) {
        pageTitle = <h3>Editar Equipo</h3>
    } else {
        pageTitle = <h3>Agregar Equipo</h3>
    }

    return(
      <AdminLayout>
      <div className="container">
        <div className="editplayers_dialog_wrapper">      
          {pageTitle}
           <form  onSubmit={this.handleSubmit}>
           <div className="form-group">
              <label>
                 Nombre   
                 <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Nombre"
                    name="name"                  
                    value={this.state.name}
                    onChange={this.handleChange}   
                    required                           
                 />                 
              </label>
            </div>
            <div className="form-group"> 
              <label>
                 Estadio
                 <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Estadio"
                    name="stadium"                  
                    value={this.state.stadium}
                    onChange={this.handleChange}   
                    required                           
                 />  
              
               </label>
            </div>             
            <div> <br /> </div>
                <button>Enviar</button>
            </form>
        </div>
      </div>
      </AdminLayout>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createTeam }
)(AddTeam);
