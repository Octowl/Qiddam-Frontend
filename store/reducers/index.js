//Combine
import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";

// Combining the reducers
export default combineReducers({
  authReducer: authReducer
});
