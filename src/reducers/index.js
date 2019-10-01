import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import playerReducer from "./playerReducer";
import securiyReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  player: playerReducer,
  security: securiyReducer
});