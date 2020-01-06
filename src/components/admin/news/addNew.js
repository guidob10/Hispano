import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Select from 'react-select';

import { createNew } from "../../actions/newActions";
import { getTeams } from "../../actions/teamActions";


class AddNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      title: '',
      description: '',
      teams: {},   
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 
 
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

  }
 
  handleChangeCombo = selectedOption => {
      this.setState( {   teamLocal : selectedOption})

  };
 
 

  handleSubmit(event) {
    event.preventDefault();

    const newNew = {
     date: this.state.date,

     title: this.state.title,
     description: this.state.description
    };

   console.log(newNew);
   this.props.createNew(newNew, this.props.history);   
  }

  componentDidMount() {
    // this.props.getTeams();
  }


  render() {
    const { errors, selectedOption, teamLocal, teamAway } = this.state;
    // recupera teams, de store redux team
    const { teams } = this.props.team;

    let pageTitle;
    if(this.state.id) {
        pageTitle = <h3>Editar Partido</h3>
    } else {
        pageTitle = <h3>Agregar Partido</h3>
    }

    return(
      <AdminLayout>
      <div className="container">
        <div className="editplayers_dialog_wrapper">      
          {pageTitle}
           <form  onSubmit={this.handleSubmit}>
           <div className="form-group">
              <label>
                 Fecha           
                 <input
                    type="date"
                    className="form-control form-control-lg"
                    placeholder="Fecha"
                    name="date"                  
                    value={this.state.date}
                    onChange={this.handleChange}     
                    required                       
                 />                 
              </label>
            </div>          
            
            <div className="form-group"> 
              <label>
              Titulo 
                 <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Titulo"
                     name="title"
                     value={this.state.title}   
                     onChange={this.handleChange} 
                     required                                                         
                 /> 
               </label>
            </div>
            <div className="form-group"> 
              <label>
              Descripcion 
              <input       style={{ height: 150, borderColor: 'gray', borderWidth: 1 }} 
                     multiline = {true}     
                     numberOfLines = {10}             
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Descripcion"
                     name="description"
                     value={this.state.description}   
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
  errors: state.errors,
  team: state.team,
});

export default connect(
  mapStateToProps,
  { createNew, getTeams }
)(AddNew);
