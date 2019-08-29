import firebase from "../../config/firebase";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FETCH_USER,
} from "../types";

export const signIn = credentials => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};

export const fetchUser = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch({
            type: FETCH_USER,
            payload: user
          });
        }
        else {
          dispatch({
            type: FETCH_USER,
            payload: null
          });
        }
      });
  };
};
