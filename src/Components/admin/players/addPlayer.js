import React, { Component } from 'react';
import AdminLayout from '../../../hoc/adminLayout';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPlayer } from "../../actions/playerActions";
//import { Row, Form, Col, Button } from 'react-bootstrap';

//quedo funcionando post (insert) y select en players

class AddPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      value: '',
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 
    /*
    this.initialState = {
      id: '',
      name: ''
    }

    if(props.player){
      this.state = props.player
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
*/
  handleChange(event) {
    //this.setState({value: event.target.value});
    this.setState({ [event.target.name]: event.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
   // this.onFormSubmit(this.state);

   const newPlayer = {
    name: this.state.name,
    value: this.state.value
   };
   alert('A name was submitted: ' + newPlayer);
   console.log(newPlayer);
   this.props.createPlayer(newPlayer, this.props.history);   
 
  }

/*
  onFormSubmit(data) {
    let apiUrl;

    if(this.state.isEditProduct){
      apiUrl = 'http://localhost/dev/tcxapp/reactapi/editProduct';
    } else {
      apiUrl = 'http://localhost:8081/players/';
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    }
  };  

  onFormSubmit(data) {
 
   fetch('http://localhost:8081/players/', {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       name: '"wido"',
       email: '"a@a.com"',
      })
    })
    */
/*
   onFormSubmit(e) {
   
    e.preventDefault();
    const newPlayer = {
      playerName: this.state.projectName,
      value: this.state.value
    };
    // lo llama en project actions
    //this.props.createProject(newPlayer, this.props.history);
      this.props.createPlayer(newPlayer, this.props.history);

  }
*/

  render() {
    const { errors } = this.state;

    let pageTitle;
    if(this.state.id) {
        pageTitle = <h3>Edit Player</h3>
    } else {
        pageTitle = <h3>Add Player</h3>
    }

    return(
      <AdminLayout>
      <div>
        {pageTitle}
           <form  onSubmit={this.handleSubmit}>
              <label>
                 Nombre           
                 <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="name"                  
                    value={this.state.name}
                    onChange={this.handleChange}                           
                 />                 
              </label> 
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
               <div> <br /> </div>
                  
               <input
                   type="submit"                
                   className="btn btn-primary btn-block  mt-4"
                />
            </form>
 
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
