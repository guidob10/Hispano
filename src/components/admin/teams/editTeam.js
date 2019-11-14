import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';
import { getTeam, updateTeam } from "../../actions/teamActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

class EditTeam extends Component {

  constructor() {
    super();

    this.state = {
      id: '',
      name: '',
      stadium: '' 
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    }
    
    componentDidMount() {
       const { id } = this.props.match.params; // parametro de url a id
       this.props.getTeam(id, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        console.log("getx"+nextProps.team);
        const { id, name, stadium  } = nextProps.team;
    
        this.setState({
          id,
          name,
          stadium,
        });
      }           
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }   
    
      onSubmit(e) {
        e.preventDefault();
    
        const updateTeam = {
          id: this.state.id,
          name: this.state.name,
          stadium: this.state.stadium        
        };
        const { id } =  this.state;
        this.props.updateTeam(id,updateTeam, this.props.history);
      }

    render() {
      const {  name, stadium, errors } = this.state;

        let pageTitle;
        if(this.state.id) {
            pageTitle = <h3>Editar Equipo</h3>
        } else {
            pageTitle = <h3>Agregar Equipo</h3>
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
                          Estadio
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Estadio"
                                name="stadium"
                                required
                                value={this.state.stadium}   
                                onChange={this.onChange}                                                         
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
    team: state.team.team
  });
  
  export default connect(
    mapStateToProps,
    { getTeam, updateTeam }
  )(EditTeam);