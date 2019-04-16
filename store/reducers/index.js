//Combine
import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import activitiesReducer from "./activitiesReducer";

// Combining the reducers
export default combineReducers({
  authReducer: authReducer,
  activities: activitiesReducer
});
