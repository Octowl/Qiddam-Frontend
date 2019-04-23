import axios from "axios";
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const createInvite = invite => {
  return async dispatch => {
    try {
      const res = await instance.post("/api/invite/", invite);
      const response = res.data;
      dispatch({
        type: actionTypes.CREATE_INVITE,
        payload: response["response"]
      });
    } catch (error) {
      console.error("Something went wrong with the invite creation... ", error);
    }
  };
};
