import axios from "axios";
import { GET_ERRORS } from "./types";

export const createPlayer = (player, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8081/players", player);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};