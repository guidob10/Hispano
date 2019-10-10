import React, { Component } from 'react';
import AdminLayout from '../../../hoc/adminLayout';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPlayer } from "../../actions/playerActions";
import FileUploader from "../../ui/fileUploader";

class AddPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      value: '',
      email: '',
      dayBirth: '',
      defaultImg: null,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnFileChange = this.handleOnFileChange.bind(this);

  } 

  /*
  handleChange(event)  {
    switch (event.target.name) {
      // Updated this
      case 'selectedFile':
        if(event.target.files.length > 0) {
            // Accessed .name from file 
            this.setState({ defaultImg: event.target.files[0] });
        }
      break;
      default:
        this.setState({ [event.target.name]: event.target.value });
     }
        console.log(this.state.defaultImg);
  }*/

  handleOnFileChange = (event) => {
    let defaultImg = event.target.files[0];
    this.setState({
      defaultImg : defaultImg
    })
  //  console.log(event.target.files[0])
  }   

  handleChange(event) { 
    //this.setState({value: event.target.value});
    this.setState({ [event.target.name]: event.target.value  });
    console.log(this.state)
  }
 

  handleSubmit(event) {
    event.preventDefault();

   const newPlayer = {
    name: this.state.name,
    value: this.state.value,
    email: this.state.email,
    defaultImg: this.state.defaultImg,
    dayBirth: this.state.dayBirth
   };
   console.log("nuevo "+newPlayer);
   this.props.createPlayer(newPlayer, this.props.history);   
 
  }


  render() {
    const { errors, defaultImg } = this.state;
    //const { uploading, images } = this.state

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
                 <div className="label_inputs">Nombre</div>     
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
                 <div className="label_inputs">Valor</div> 
                 <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Valor"
                     name="value"
                     value={this.state.value}   
                     onChange={this.handleChange} 
                     required                                                         
                 /> 
               </label>
            </div>
            <div className="form-group"> 
              <label>
              <div className="label_inputs">Email</div> 
                 <input
                     type="email"
                     className="form-control form-control-lg"
                     placeholder="Email"
                     name="email"
                     required
                     value={this.state.email}   
                     onChange={this.handleChange}                                                         
                 /> 
               </label>
            </div>
            <div className="form-group"> 
              <label>
                 <div className="label_inputs">Fecha de Nacimiento</div> 
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
                 <div className="label_inputs">Foto</div> 
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
