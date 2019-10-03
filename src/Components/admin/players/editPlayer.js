import React, { Component } from 'react';
import AdminLayout from '../../../hoc/adminLayout';
import { getPlayer, updatePlayer } from "../../actions/playerActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

//import { firebaseTeams , firebaseDB, firebaseMatches } from '../../../firebase';
//import { firebaseLooper } from '../../ui/misc';

class EditPlayer extends Component {

  constructor() {
    super();

    this.state = {
      id: '',
      name: '',
      value: '',
      dayBirth: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentDidMount() {
       const { id } = this.props.match.params; // parametro de url a id
       this.props.getPlayer(id, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        console.log("getx"+nextProps.player);

        const { id, name, value, dayBirth } = nextProps.player;
    
        this.setState({
          id,
          name,
          value,
          dayBirth
        });
      }    
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const updatePlayer = {
          id: this.state.id,
          name: this.state.name,
          value: this.state.value,
          dayBirth: this.state.dayBirth
        };
        const { id } =  this.state;
        this.props.updatePlayer(id,updatePlayer, this.props.history);
      }
 
    render() {
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
                        />
                        </div>
                        <h6>Valor</h6>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Valor"
                            name="value"
                            value={this.state.value}
                            onChange={this.onChange}                          
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
                        />

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