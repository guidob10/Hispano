import React, { Component } from 'react';
import AdminLayout from '../../../hoc/adminLayout';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createMatch } from "../../actions/matchActions";


class AddMatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      result: '',
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

   const newMatch = {
    date: this.state.date,
    result: this.state.result,
    email: this.state.email,
    dayBirth: this.state.dayBirth
   };
   console.log(newMatch);
   this.props.createMatch(newMatch, this.props.history);   
 
  }


  render() {
    const { errors } = this.state;

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
                 />                 
              </label>
            </div>
            <div className="form-group"> 
              <label>
              Resultado
                 <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Resultado"
                     name="result"
                     value={this.state.result}   
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
  { createMatch }
)(AddMatch);
