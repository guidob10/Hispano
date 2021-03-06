import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import baseUrl from '../../config/axiosURL';
 
const baseUrlApi = baseUrl;

export const createNewUser = (newUser, history) => async dispatch => {
  try {
    await axios.post(baseUrlApi+"/users/register", newUser); 
    
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const login = LoginRequest => async dispatch => {
  console.log("llegue3a");
  try {
    // post => Login Request
    const res = await axios.post(baseUrlApi+"/users/login", LoginRequest);
    // extract token from res.data
    const { token } = res.data;
    // store the token in the localStorage
    localStorage.setItem("jwtToken", token);
    console.log("llegue3b"+token);
    // set our token in header ***
    setJWTToken(token);
    // decode token on React
    const decoded = jwt_decode(token);
    // dispatch to our securityReducer
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
  } catch (err) {
    console.log("llegue3");
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const logout = (history) => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
      type: SET_CURRENT_USER,
      payload: {}
    });
  };

  
