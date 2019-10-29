import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Select from 'react-select';

import { createMatch } from "../../actions/matchActions";
import { getTeams } from "../../actions/teamActions";


class AddMatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      teamLocal: '',
      teamAway: '',
      resultLocal: '',
      resultAway: '',
      teams: {},   
   //   selectedOption: null,   
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleChangeCombo = this.handleChangeCombo.bind(this);
  } 
 
  handleChange(event) {
    //this.setState({value: event.target.value});
    this.setState({ [event.target.name]: event.target.value });

  }
 
  handleChangeCombo = selectedOption => {

   // this.setState( { selectedOption : selectedOption, teamLocal : selectedOption})
      this.setState( {   teamLocal : selectedOption})

  };
 
  handleChangeComboAway = selectedOption => {
    // this.setState( { selectedOption : selectedOption, teamLocal : selectedOption})
       this.setState( {  teamAway : selectedOption})
   };
  
 
 

  handleSubmit(event) {
    event.preventDefault();

    const newMatch = {
     date: this.state.date,
     resultLocal: this.state.resultLocal,
     resultAway: this.state.resultAway,    
     //teamLocal: this.state.teamLocal,
     teamLocal: this.state.teamLocal,
     teamAway: this.state.teamAway
    };

   console.log(newMatch);
   this.props.createMatch(newMatch, this.props.history);   
  }

  componentDidMount() {
    this.props.getTeams();
    /*
    this.setState({
      teams: [
        { name: 'Afghanistan' , label: 'asd'},
        {name: 'Aland Islands',label:'ff'},
        {name: 'Albania', label: '222'}
      ]
    });*/
  }


  render() {
    const { errors, selectedOption, teamLocal, teamAway } = this.state;
    // recupera teams, de store redux team
    const { teams } = this.props.team;

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
                    required                       
                 />                 
              </label>
            </div>          
            {/* 
            <div className="form-group"> 
              <label>
                 Equipo Local
                 <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder=" "
                     name="teamLocal"
                     value={this.state.teamLocal}   
                     onChange={this.handleChange}
                     required                                                          
                 /> 
               </label>
            </div> */}
            <div className="form-group"> 
              <label>
                 Equipo Local                
                 <Select options={ teams } 
                         value={teamLocal} 
                         onChange={this.handleChangeCombo} 
                         getOptionLabel={option => `${option.name}`
                                        }
                  />
              </label>                            
            </div>                
            <div className="form-group"> 
              <label>
                 Equipo Visita
                 <Select options={ teams } 
                         value={teamAway} 
                         onChange={this.handleChangeComboAway} 
                         getOptionLabel={option => `${option.name}`
                                        }
                  />
               </label>               
            </div>     
            
            <div className="form-group"> 
              <label>
              Resultado Local
                 <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Resultado"
                     name="resultLocal"
                     value={this.state.resultLocal}   
                     onChange={this.handleChange} 
                     required                                                         
                 /> 
               </label>
            </div>
            <div className="form-group"> 
              <label>
              Resultado Visita
                 <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Resultado"
                     name="resultAway"
                     value={this.state.resultAway}   
                     onChange={this.handleChange} 
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
  errors: state.errors,
  team: state.team,
});

export default connect(
  mapStateToProps,
  { createMatch, getTeams }
)(AddMatch);
