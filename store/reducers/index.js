//Combine
import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import activityReducer from "./activityReducer";
import inviteReducer from "./inviteReducer";

// Combining the reducers
export default combineReducers({
  authReducer: authReducer,
  activityReducer: activityReducer,
  inviteReducer: inviteReducer
});
