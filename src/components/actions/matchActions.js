import axios from "axios";
import { GET_ERRORS, GET_MATCH } from "./types";
import { DELETE_MATCH, GET_MATCHES } from "./types";
import baseUrl from '../../config/axiosURL';
 
const baseUrlApi = baseUrl;

export const getMatches = (activePage,totalElements) => async dispatch => {
 // const res = await axios.get(baseUrlApi+"/matches");
 const res = await axios.get(baseUrlApi+`/matches?page=${activePage}&size=${totalElements}`);

  dispatch({
    type: GET_MATCHES,
    payload: res.data 
  });
};
 

export const getMatch = (id, history) => async dispatch => {
  const res = await axios.get(baseUrlApi+`/matches/${id}`);
  console.log("getp"+id);
  dispatch({
    type: GET_MATCH,
    payload: res.data
  });
};

export const createMatch = (onematch, history) => async dispatch => {
  try {
    const res = await axios.post(baseUrlApi+"/matches", onematch);
    history.push("/admin_matches");  
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
 
export const deleteMatch = id => async dispatch => {
  console.log("borroo"+id);

  await axios.delete(baseUrlApi+`/matches/${id}`);
  dispatch({
    type: DELETE_MATCH,
    payload: id
  });
};
 
export const updateMatch = (id, onematch, history) => async dispatch => {
  try {
    const res = await axios.put(baseUrlApi+`/matches/${id}`, onematch);
    history.push("/admin_matches");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: id
    });
  }
};
