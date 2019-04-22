// ActionTypes
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  profile: null,
  myprofile: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.FUTCH_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.FUTCH_MY_PROFILE:
      return {
        ...state,
        myprofile: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
