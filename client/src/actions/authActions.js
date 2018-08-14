import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

import { GET_ERRORS } from "./types";

// Register User

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) //Once successfully registered, it will go to login page
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;

      // Set token to LocalStorage
      localStorage.setItem("jwtToken", token); //only stores strings in localStorage
      // Set token to Auth header
      setAuthToken(token);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
