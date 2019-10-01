import axios from "axios";
import { GET_ERRORS } from "./types";
 
export const createPlayer = (player, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8081/players", player);
    history.push("/admin_players");  
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
 
/*
export function crearNuevoJugadorAction(jugador){
  return (dispatch) => {
      dispatch(nuevoJugador())
      console.log(jugador);

      clienteAxios.post('/players', jugador)
      .then(respuesta => {
          console.log(respuesta);
          dispatch (agregarJugadorExito(jugador))
      })
      .catch (error => {
          console.log(error);
          dispatch(agregarJugadorError(error));
      })

  }
}*/