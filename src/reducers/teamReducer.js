import { GET_TEAMS, GET_TEAM, DELETE_TEAM, UPDATE_TEAM } from "../components/actions/types";


const initialState = {
  teams: [],
  oneteam: {}
};

//el type decide que es lo que hay que hacer (aca hay un reducer por "clase" project, por eso
//se mira el type con un switch para decidir)

// el ...state indica que manda todo el objeto junto, o sea el estado con todas sus props
// esto permite que pueda tener distinta cantidad de datos, siendo mas flexible la estructura que envia
// esto permite devolver lo que estaba en el estado + el payload nuevo que creo.

// el action.payload son los datos que tiene la accion, puede ser cualquier tipo de dato
// si hay un error, el payload deberia ser un objeto error
//ej. payload: {user: "Test User", age: 25} Esto seria lo que guarda en el state
// solo con poner payload y llamando al action->reducer, impacta en el estado.
//seria como el evento comando delegado de flex
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload
      };
     
      case GET_TEAM:
        return {
        ...state,
        team: action.payload
      };

    case DELETE_TEAM:
      return {
        ...state,
              teams: state.teams.filter(
              oneteam => oneteam.id !== action.payload
        )
      };

     case UPDATE_TEAM:
       return {
        ...state,
        teams: action.payload
      };
    

    default:
      return state;
  }
}