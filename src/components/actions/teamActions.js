import axios from "axios";
import { GET_ERRORS, GET_TEAM } from "./types";
import { DELETE_TEAM, GET_TEAMS, UPDATE_TEAM } from "./types";
import baseUrl from '../../config/axiosURL';
 
const baseUrlApi = baseUrl;

export const getTeams = () => async dispatch => {
 // clienteAxios.post('/players', jugador) 
  const res = await axios.get(baseUrlApi+"/teams");
  dispatch({
    type: GET_TEAMS,
    payload: res.data
  });
};
 
export const getTeam = (id, history) => async dispatch => {
  const res = await axios.get(baseUrlApi+`/teams/${id}`);
  console.log("getp"+id);

  dispatch({
    type: GET_TEAM,
    payload: res.data
  });
};
 

export const createTeam = (oneteam, history) => async dispatch => {
  try {
    const res = await axios.post(baseUrlApi+"/teams", oneteam);
    history.push("/admin_teams");  
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
 
export const deleteTeam = id => async dispatch => {
  console.log("borroo"+id);

  await axios.delete(baseUrlApi+`/teams/${id}`);
  dispatch({
    type: DELETE_TEAM,
    payload: id
  });
};
  
export const updateTeam = (id, oneteam, history) => async dispatch => {
  try {
    const res = await axios.put(baseUrlApi+`/teams/${id}`, oneteam);
    history.push("/admin_teams");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: id
    });
  }
};
 
 