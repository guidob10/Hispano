import axios from "axios";
import { GET_ERRORS, GET_PLAYER } from "./types";
import { DELETE_PLAYER, GET_PLAYERS } from "./types";
import baseUrl from '../../config/axiosURL';
 
const baseUrlApi = baseUrl;

export const getPlayers = () => async dispatch => {
  console.log("getp ");

 // clienteAxios.post('/players', jugador)
 
  const res = await axios.get(baseUrlApi+"/players");
  dispatch({
    type: GET_PLAYERS,
    payload: res.data
  });
};

export const getPlayer = (id, history) => async dispatch => {
  const res = await axios.get(baseUrlApi+`/players/${id}`);
  console.log("getp"+id);
  dispatch({
    type: GET_PLAYER,
    payload: res.data
  });
};
/*
export const createPlayer = (player, history) => async dispatch => {
  try {
    const res = await axios.post(baseUrlApi+"/players", player);
 
    history.push("/admin_players");  
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};*/
export const createPlayer = (player, history) => async dispatch => {
 // try {
    const form = new FormData();
  //  formData.append(player.defaultImg, fs.createReadStream(player.defaultImg));
    form.append('defaultImg', player.defaultImg); 
    form.append('name', player.name);
    form.append('position', player.position);    
    form.append('registrationNumber', player.registrationNumber); 
    form.append('dayBirth', player.dayBirth); 

    const res = await axios({
    method: 'post',
    url: baseUrlApi+"/players",
    data: form,
    config: { headers: { 'content-type': `multipart/form-data`}}})     
    
  .then((res)=>{ 
    history.push("/admin_players");  
  },(err)=>{
    dispatch({
      //ver q falla en error
      type: GET_ERRORS,
      payload: res.data});
  })};
 //}
 
export const deletePlayer = id => async dispatch => {
  console.log("borroo"+id);

  await axios.delete(baseUrlApi+`/players/${id}`);
  dispatch({
    type: DELETE_PLAYER,
    payload: id
  });
};
 /*
export const updatePlayer = (id, player, history) => async dispatch => {
  try {
    const res = await axios.put(baseUrlApi+`/players/${id}`, player);
    history.push("/admin_players");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: id
    });
  }
};*/

// agregar la foto
export const updatePlayer = (id, player, history) => async dispatch => {
  // try {
     const form = new FormData();
   //  formData.append(player.defaultImg, fs.createReadStream(player.defaultImg));
     form.append('defaultImg', player.defaultImg); 
     form.append('name', player.name);
     form.append('position', player.position);    
     form.append('registrationNumber', player.registrationNumber); 
     form.append('dayBirth', player.dayBirth);
     form.append('defaultImg',player.defaultImg) ;
 
     const res = await axios({
     method: 'PUT',
     url: baseUrlApi+`/players/${id}`,
     data: form,
     config: { headers: { 'content-type': `multipart/form-data`}}})     
     
   .then((res)=>{ 
     history.push("/admin_players");  
   },(err)=>{
     dispatch({
       //ver q falla en error
       type: GET_ERRORS   ,
        payload: id } );
   })};

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