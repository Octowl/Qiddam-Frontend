// API Requests
import axios from "axios";
// Decrypt Token
import jwt_decode from "jwt-decode";
// ActionTypes
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const fetchActivities = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api");
      const activities = res.data;
      dispatch({
        type: actionTypes.FETCH_ACTIVITIES,
        payload: activities
      });
    } catch (error) {
      console.error(
        "Something went wrong with fetching the activities ",
        error
      );
    }
  };
};

export const fetchCatogries = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/categories");
      const categories = res.data;
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: categories
      });
    } catch (error) {
      console.error("Somthing went wrong with fetching the categories ", error);
    }
  };
};
