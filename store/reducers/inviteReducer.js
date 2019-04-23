import * as actionTypes from "../actions/actionTypes";

const initialState = {
  response: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_INVITE:
      return {
        ...state,
        response: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
