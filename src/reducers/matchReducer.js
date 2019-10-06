//import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from "../actions/types";
import { GET_MATCHES, GET_MATCH, DELETE_MATCH, UPDATE_MATCH } from "../components/actions/types";


const initialState = {
  matches: [],
  onematch: {}
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
    case GET_MATCHES:
      return {
        ...state,
        matches: action.payload
      };
    
    case GET_MATCH:
            return {
        ...state,
        onematch: action.payload
      };

    case DELETE_MATCH:
      return {
        ...state,
            matches: state.matches.filter(
              onematch => onematch.id !== action.payload
        )
      };

     case UPDATE_MATCH:
       return {
        ...state,
        matches: action.payload
      };
/*
       case types.UPDATE_DATA:
          return Object.assign({}, state, {
             data: state.data.filter(item => {
                 return item.id !== action.id; //delete matched data
             }).concat(action.payload); //concats new data
          }); 
      default:
          return state;
      }*/       
//agregar gbc
    default:
      return state;
  }
}