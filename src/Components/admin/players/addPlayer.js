
import React from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';
//import { Row, Form, Col, Button } from 'react-bootstrap';

//quedo funcionando post (insert) y select en players

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

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
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.onFormSubmit(this.state);
    event.preventDefault();
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

   onFormSubmit(data) {
   
    fetch("http://localhost:8081/players/", {
    method: 'POST',
    headers: new Headers({
               'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: "name="+this.state.value+"&email=ff@ff.com" // <-- Post parameters
    })
    .then((response) => response.text())
    .then((responseText) => {
      alert(responseText);
    })
    .catch((error) => {
      console.error(error);
    });   
  };  


  render() {

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
                  value={this.state.value}
                   onChange={this.handleChange}                           
                 />                 
              </label> 
              <label>
                 Email
                 <input
                   type="text"
                   className="form-control form-control-lg"
                   placeholder="Email"
                   name="email"
                   value={this.state.projectIdentifier}             
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

export default AddPlayer;
