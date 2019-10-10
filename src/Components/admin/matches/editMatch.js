import React, { Component } from 'react';
import AdminLayout from '../../../hoc/adminLayout';
import { getMatch, updateMatch } from "../../actions/matchActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

 
class EditMatch extends Component {

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
       this.props.getMatch(id, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        console.log("getx"+nextProps.onematch);

        const { id, date, result, dayBirth } = nextProps.onematch;
    
        this.setState({
          id,
          date,
          result,
          dayBirth
        });
      }    
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const updateMatch = {
          id: this.state.id,
          date: this.state.date,
          result: this.state.result,
          dayBirth: this.state.dayBirth
        };
        const { id } =  this.state;
        this.props.updateMatch(id,updateMatch, this.props.history);
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
                        <h6>Fecha</h6>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg "
                            placeholder="Fecha"
                            name="date"
                            value={this.state.date}
                            onChange={this.onChange}
                            required 
                        />
                        </div>
                        <h6>Resultado</h6>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Resultado"
                            name="result"
                            value={this.state.result}
                            onChange={this.onChange}  
                            required                         
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
    onematch: state.match.onematch
  });
  
  export default connect(
    mapStateToProps,
    { getMatch, updateMatch }
  )(EditMatch);