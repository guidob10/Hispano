import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import playerReducer from "./playerReducer";
import securiyReducer from "./securityReducer";
import matchReducer from "./matchReducer";

export default combineReducers({
  errors: errorReducer,
  player: playerReducer,
  match: matchReducer,
  security: securiyReducer
});