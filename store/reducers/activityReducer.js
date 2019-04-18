import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  activities: [],
  activity: []
};

const activities = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case actionTypes.FETCH_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      };

    case actionTypes.ACTIVITY_DETAILS:
      return {
        ...state,
        activity: action.payload
      };

    default:
      return state;
  }
};

export default activities;
