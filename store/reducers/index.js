//Combine
import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import activityReducer from "./activityReducer";


// Combining the reducers
export default combineReducers({
  authReducer: authReducer,
  activityReducer: activityReducer

});
