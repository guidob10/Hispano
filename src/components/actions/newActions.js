import axios from "axios";
import { GET_ERRORS, GET_NEW, DELETE_NEW } from "./types";
import { GET_NEWS } from "./types";
import baseUrl from '../../config/axiosURL';
 
const baseUrlApi = baseUrl;

export const getNews = () => async dispatch => {
  console.log("getp ");

 // clienteAxios.post('/players', jugador)
 
  const res = await axios.get(baseUrlApi+"/news");
  dispatch({
    type: GET_NEWS,
    payload: res.data
  });
};
/*
export const getNew = (id, history) => async dispatch => {
  const res = await axios.get(baseUrlApi+`/news/${id}`);
  console.log("getp"+id);
  dispatch({
    type: GET_NEW,
    payload: res.data
  });
};
*/
export const createNew = (onenew, history) => async dispatch => {
  try {
    const res = await axios.post(baseUrlApi+"/news", onenew);
    history.push("/admin_news");  
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
 
  
export const deleteNew = id => async dispatch => {
  console.log("borro"+id);
  await axios.delete(baseUrlApi+`/news/${id}`);
  dispatch({
    type: DELETE_NEW,
    payload: id
  });
};
 
