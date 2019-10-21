import React, { Component } from 'react';
import AdminLayout from '../../../hoc/adminLayout';
import { getPlayer, updatePlayer } from "../../actions/playerActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';
import Select from 'react-select';


//import { firebaseTeams , firebaseDB, firebaseMatches } from '../../../firebase';
//import { firebaseLooper } from '../../ui/misc';

class EditPlayer extends Component {

  constructor() {
    super();

    this.state = {
      id: '',
      name: '',
      position: '',
      dayBirth: '',
      defaultImg: null,
    //  positions:[{label: "Base", value:1}, {label:"Alero", value:2},  {label:"Pivot", value:3}, {label:"DT", value:4}]
      positions:[{value: "Base", label: "Base"}, {value: "Alero", label:"Alero"},  {value:"Pivot", label:"Pivot"}, {value: "DT", label:"DT"}]
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleOnFileChange = this.handleOnFileChange.bind(this);
    this.handleChangeCombo = this.handleChangeCombo.bind(this);

    }
    
    componentDidMount() {
       const { id } = this.props.match.params; // parametro de url a id
       this.props.getPlayer(id, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        console.log("getx"+nextProps.player);

        const { id, name, position, dayBirth, defaultImg } = nextProps.player;
    
        this.setState({
          id,
          name,
          position,
          dayBirth,
          defaultImg,
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
      //  console.log(event.target.files[0])
      }         
    
      onSubmit(e) {
        e.preventDefault();
    
        const updatePlayer = {
          id: this.state.id,
          name: this.state.name,
          position: this.state.position,
          dayBirth: this.state.dayBirth,
  //ver si agregarimg
          defaultImg: this.state.defaultImg          
        };
        const { id } =  this.state;
        this.props.updatePlayer(id,updatePlayer, this.props.history);
      }
 
      handleChangeCombo = selectedOption => {
        // this.setState( { selectedOption : selectedOption, teamLocal : selectedOption})
        console.log("select"+selectedOption.label);
           this.setState( { position : selectedOption.label})
       };

    render() {
      const {  positions,position, errors, defaultImg } = this.state;

        return (
            <AdminLayout>
                <div className="editmatch_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                    <form onSubmit={this.onSubmit}>
                        <h6>Nombre</h6>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg "
                            placeholder="Nombre"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            required 
                        />
                        </div>
                        <h6>Posicion</h6>
                        <div className="form-group">
                        <Select options={positions } 
                          //value={positions[0]}  esto funciona, porque espera un array de objetos.
                          value={{label: position, value:position}}
                          onChange={this.handleChangeCombo} 
                          getOptionLabel={option => `${option.label}` }
                          getOptionValue={option => option.value}  
                        //  defaultValue={{label: 'abcd', value: 'abcd'}}                                                                      
                         />
                        </div>
                        <h6>Fecha de nacimiento</h6>
                        <div className="form-group">
                        <input
                            type="date"
                            className="form-control form-control-lg"
                            name="dayBirth"
                            value={this.state.dayBirth}
                            onChange={this.onChange}
                            required 
                        />

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