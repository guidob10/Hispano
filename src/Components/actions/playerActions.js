import axios from "axios";
import { GET_ERRORS } from "./types";
import { DELETE_PLAYER, GET_PLAYERS } from "./types";

 
export const getPlayers = () => async dispatch => {
  console.log("getp");

  const res = await axios.get("http://localhost:8081/players");
  dispatch({
    type: GET_PLAYERS,
    payload: res.data
  });
};

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
 
export const deletePlayer = id => async dispatch => {
  console.log("borroo"+id);

  await axios.delete(`http://localhost:8081/players/${id}`);
  dispatch({
    type: DELETE_PLAYER,
    payload: id
  });
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