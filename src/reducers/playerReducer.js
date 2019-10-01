//import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from "../actions/types";
import { GET_PLAYERS, GET_PLAYER, DELETE_PLAYER, UPDATE_PLAYER } from "../components/actions/types";


const initialState = {
  players: [],
  player: {}
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
    case GET_PLAYERS:
      return {
        ...state,
        players: action.payload
      };
    
    case GET_PLAYER:
      return {
        ...state,
        player: action.payload
      };

    case DELETE_PLAYER:
      return {
        ...state,
            players: state.players.filter(
            player => player.playerIdentifier !== action.payload
        )
      };

     case UPDATE_PLAYER:
       return {
        ...state,
        players: action.payload
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