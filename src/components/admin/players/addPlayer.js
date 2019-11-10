import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPlayer } from "../../actions/playerActions";
import FileUploader from "../../ui/fileUploader";
import Select from 'react-select';


class AddPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      position: '',
      registrationNumber: '',
      dayBirth: '',
      defaultImg: null,
      positions:[{label: "Base", value:1}, {label:"Alero", value:2},  {label:"Pivot", value:3}, {label:"DT", value:4}],
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnFileChange = this.handleOnFileChange.bind(this);

  } 

  handleOnFileChange = (event) => {
    let defaultImg = event.target.files[0];
    this.setState({
      defaultImg : defaultImg
    })
  }   

  handleChange(event) { 
    this.setState({ [event.target.name]: event.target.value  });
  }
  

  handleChangeCombo = selectedOption => {
       this.setState( {   position : selectedOption.label})
  };

  handleSubmit(event) {
    event.preventDefault();

   const newPlayer = {
    name: this.state.name,
    position: this.state.position,
    registrationNumber: this.state.registrationNumber,
    defaultImg: this.state.defaultImg,
    dayBirth: this.state.dayBirth
   };
   this.props.createPlayer(newPlayer, this.props.history);   
  }


  render() {
    const {  positions, position, registrationNumber, errors, defaultImg } = this.state;
  
    let pageTitle;
    if(this.state.id) {
        pageTitle = <h3>Editar Jugador</h3>
    } else {
        pageTitle = <h3>Agregar Jugador</h3>
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
                 Posicion

                 <Select options={positions } 
                         value={position.label} 
                         onChange={this.handleChangeCombo} 
                         getOptionLabel={option => `${option.label}` }
                    
                  />
              
               </label>
            </div>
            <div className="form-group"> 
              <label>
              Numero De Camiseta
                 <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Numero"
                     name="registrationNumber"
                     required
                     value={this.state.registrationNumber}   
                     onChange={this.handleChange}                                                         
                 /> 
               </label>
            </div>
            <div className="form-group"> 
              <label>
                 Fecha de Nacimiento
                 <input
                     type="date"
                     className="form-control form-control-lg"
                     placeholder="Fecha de Nacimiento"
                     name="dayBirth"
                     value={this.state.dayBirth}   
                     onChange={this.handleChange} 
                     required                                                         
                 /> 
               </label>
            </div>       
            <div className="form-group"> 
              <label>
                 Foto
                 <input
                     type="file"
                     id="InputFile"
                     className="form-control form-control-lg"
                     placeholder="Archivo"
                     name="defaultImg"
                     onChange={this.handleOnFileChange} accept='.jpg' 
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
  { createPlayer }
)(AddPlayer);
