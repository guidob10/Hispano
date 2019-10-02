import React, { Component } from 'react';
import AdminLayout from '../../../hoc/adminLayout';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPlayer } from "../../actions/playerActions";


class AddPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      value: '',
      email: '',
      dayBirth: '',
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 
 
  handleChange(event) {
    //this.setState({value: event.target.value});
    this.setState({ [event.target.name]: event.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();

   const newPlayer = {
    name: this.state.name,
    value: this.state.value,
    email: this.state.email,
    dayBirth: this.state.dayBirth
   };
   console.log(newPlayer);
   this.props.createPlayer(newPlayer, this.props.history);   
 
  }


  render() {
    const { errors } = this.state;

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
                 />                 
              </label>
            </div>
            <div className="form-group"> 
              <label>
                 Valor
                 <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Valor"
                     name="value"
                     value={this.state.value}   
                     onChange={this.handleChange}                                                         
                 /> 
               </label>
            </div>
            <div className="form-group"> 
              <label>
                 Email
                 <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Email"
                     name="email"
                     value={this.state.email}   
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
                 /> 
               </label>
            </div>             
            <div> <br /> </div>
                {/*  
               <input
                   type="submit"                
                   className="btn btn-primary btn-block  mt-4"
                />*/}
                <button>Enviar</button>
            </form>
        </div>
      </div>
      </AdminLayout>
    )
  }
}

// export default AddPlayer;
const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createPlayer }
)(AddPlayer);
