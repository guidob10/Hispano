import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';
import { getPlayer, updatePlayer } from "../../actions/playerActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';
import Select from 'react-select';

class EditPlayer extends Component {

  constructor() {
    super();

    this.state = {
      id: '',
      name: '',
      position: '',
      registrationNumber: '',
      dayBirth: '',
      positions:[{value: "Base", label: "Base"}, {value: "Alero", label:"Alero"},  {value:"Pivot", label:"Pivot"}, {value: "DT", label:"DT"}]
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeCombo = this.handleChangeCombo.bind(this);

    }
    
    componentDidMount() {
       const { id } = this.props.match.params; // parametro de url a id
       this.props.getPlayer(id, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        console.log("getx"+nextProps.player);

        const { id, name, position, dayBirth, registrationNumber, defaultImg } = nextProps.player;
    
        this.setState({
          id,
          name,
          position,
          registrationNumber,
          dayBirth,
        });
    }    
    
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    handleOnFileChange = (event) => {
        let defaultImg = event.target.files[0];
        this.setState({
          defaultImg : defaultImg
        })
    }         
    
    onSubmit(e) {
        e.preventDefault();
    
        const updatePlayer = {
          id: this.state.id,
          name: this.state.name,
          position: this.state.position,
          registrationNumber: this.state.registrationNumber,         
          dayBirth: this.state.dayBirth       
        };
        const { id } =  this.state;
        this.props.updatePlayer(id,updatePlayer, this.props.history);
    }
 
    handleChangeCombo = selectedOption => {
       this.setState( { position : selectedOption.label})
    };

    render() {
      const {  positions,position, errors, defaultImg } = this.state;

        let pageTitle;
        if(this.state.id) {
            pageTitle = <h3>Editar Jugador</h3>
        } else {
            pageTitle = <h3>Agregar Jugador</h3>
        }      

        return (
            <AdminLayout>

                <div className="container">
                  <div className="editplayers_dialog_wrapper">      
                  {pageTitle}                      
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>
                            Nombre
 
                        <input
                            type="text"
                            className="form-control form-control-lg "
                            placeholder="Nombre"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            required 
                        />
                        </label>                           
                        </div>
 
                        <div className="form-group">
                        <label>
                            Posicion                        
                            <Select options={positions } 
                              value={{label: position, value:position}}
                              onChange={this.handleChangeCombo} 
                              getOptionLabel={option => `${option.label}` }
                              getOptionValue={option => option.value}  
                          />
                        </label>                           
                        </div>
                        <div className="form-group"> 
                        <label>
                          Numero De Camiseta 
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Numero de Camiseta"
                                name="registrationNumber"
                                required
                                value={this.state.registrationNumber}   
                                onChange={this.onChange}                                                         
                            /> 
                        </label>
                        </div>                        
                        <div className="form-group"> 
                        <label>
                        Fecha de nacimiento
                        <input
                            type="date"
                            className="form-control form-control-lg"
                            name="dayBirth"
                            value={this.state.dayBirth}
                            onChange={this.onChange}
                            required 
                        />
                        </label>
                        </div>                         
                        <button>Enviar</button>                        
                    </form>
                    </div>
                </div>                    
            </AdminLayout>
        );
    }
}

const mapStateToProps = state => ({
    player: state.player.player
  });
  
  export default connect(
    mapStateToProps,
    { getPlayer, updatePlayer }
  )(EditPlayer);