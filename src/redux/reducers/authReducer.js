import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FETCH_USER
} from "../types";

const initialState = {
  authError: null,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log(action.err);
      return {
        ...state,
        authError: "Login failed"
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
