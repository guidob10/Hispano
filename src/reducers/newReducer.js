import { GET_NEWS, GET_NEW, DELETE_NEW } from "../components/actions/types";


const initialState = {
  news: [],
  new: {},
  onenew: {}

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
    case GET_NEWS:
      return {
        ...state,
        news: action.payload
      };
    
    case GET_NEW:
            return {
        ...state,
        new: action.payload
      };

    case DELETE_NEW:
       return {
         ...state,
             news: state.news.filter(
               onenew => onenew.id !== action.payload
         )
     };      
/*
     case UPDATE_PLAYER:
       return {
        ...state,
        players: action.payload
      };
*/
    default:
      return state;
  }
}