import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import playerReducer from "./playerReducer";
import securiyReducer from "./securityReducer";
import matchReducer from "./matchReducer";
import teamReducer from "./teamReducer";
import newReducer from "./newReducer";


export default combineReducers({
  errors: errorReducer,
  player: playerReducer,
  match: matchReducer,
  team: teamReducer,
  new: newReducer,  
  security: securiyReducer
});