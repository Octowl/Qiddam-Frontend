import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  activity: [],
  categoryActivities: []
};

// might delete this later
const activities = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    case actionTypes.ACTIVITY_DETAILS:
      return {
        ...state,
        activity: action.payload
      };
    case actionTypes.FETCH_CATEGORY_ACTIVITIES:
      const allCategories = action.payload;
      let categoryActivities = allCategories.find(
        category => action.categoryID === category.id
      );
      return {
        ...state,
        categoryActivities: categoryActivities
      };
    case actionTypes.CREATE_ACTIVITY:
      return {
        ...state,
        categories: action.payload
      };
    case actionTypes.UPDATE_ACTIVITY:
      return {
        ...state,
        categories: action.payload
      };
    case actionTypes.DELETE_ACTIVITY:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};

export default activities;
