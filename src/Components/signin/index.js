import React, { Component } from 'react';
//import { firebase } from '../../firebase';

import FormField from '../ui/formFields';
import { validate } from '../ui/misc';
import { login, asd } from "../actions/securityActions";
//gbc
import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "../actions/types";
import setJWTToken from "../../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

class SignIn extends Component {
    state = {
        formError:false,
        formSuccess:'',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{ 
                    name:'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:''
            },
            password:{
                element:'input',
                value:'',
                config:{
                    name:'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:''
            }
        }
        
    }

    updateForm(element){
        const newFormdata = {...this.state.formdata}
        const newElement = { ...newFormdata[element.id]}

        newElement.value = element.event.target.value;

        let validData = validate(newElement);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm(e){
        e.preventDefault();

        const LoginRequest = {
          username: this.state.formdata.email.value,
          password: this.state.formdata.password.value
        };

        let dataToSubmit = {};
        let formIsValid = true;
        
        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
       
        if(formIsValid){
            console.log("llegue2a", LoginRequest);
            this.login(LoginRequest);
        }
    }     
 
    //login = LoginRequest =>  async dispatch => {
    login = async (LoginRequest) =>    {   
        const url = "http://localhost:8081/users/login";
        const data = LoginRequest;

        //const respuesta = await fetch(url)

        console.log(LoginRequest);
 
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => {   
       //      const respuesta =  res.clone().json();
        //     const { token } =  respuesta;
          //    const { token } = res.data;
          //  const token = LoginRequest;
          //   console.log( respuesta);
            //   console.log( token);

                // store the token in the localStorage
            //    localStorage.setItem("jwtToken", token);
                // set our token in header ***
           //    setJWTToken(token);
                // decode token on React
             //  const decoded = jwt_decode(token);
                // dispatch to our securityReducer               
                res.json() ;              
              } 
            ) 
         
        .catch(error => console.error('Error:', error))
        .then(response =>   console.log('Success:', response))
          //  const { token } =  response;
          //  console.log(token);
             
    }
 
/*
//    login = LoginRequest => async dispatch => {
     login = () => async dispatch => {
 
        console.log("llegue3a");
        try {
          // post => Login Request
      //const res = await axios.post("http://localhost:8081/users/login", LoginRequest);
        const res = await axios.post("http://localhost:8081/users/login", "LoginRequest");
  
      // extract token from res.data
          const { token } = res.data;
          // store the token in the localStorage
          localStorage.setItem("jwtToken", token);
          // set our token in header ***
          setJWTToken(token);
          // decode token on React
          const decoded = jwt_decode(token);
          // dispatch to our securityReducer
      
          console.log("llegue4");
          dispatch({
            type: SET_CURRENT_USER,
            payload: decoded
          });
        } catch (err) {
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
        }
      };
*/
/*
      consultaNoticias = async (categoria = 'general')  => {
        console.log("llegue4");

        const url = `https://newsapi.org/v2/everything?q=${categoria}&from
        =2019-08-25&sortBy=publishedAt&apiKey=21c4ac3b231b477680c5051210e079c0`;
    
        const respuesta = await fetch(url);
        const noticias = await respuesta.json()
    //    console.log(noticias.articles);
         console.log(noticias);
            this.setState({
          noticias : noticias.articles
        }) 
      }      
*/
    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{margin:'100px'}}>
                    <form onSubmit={(event)=> this.submitForm(event)}>

                        <h2>Please Login</h2>

                        <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'password'}
                            formdata={this.state.formdata.password}
                            change={(element)=> this.updateForm(element)}
                        />
                            { this.state.formError ? 
                                <div className="error_label">Something is wrong, try again.</div>
                                :null
                            }
                        <button onClick={(event)=> this.submitForm(event)}>Log in</button>
                    </form>

                </div>     
            </div>
        );
    }
}

export default SignIn;