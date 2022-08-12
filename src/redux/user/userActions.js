import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebaseConfig";

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./userTypes";

export const signUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signUpSuccess = (userAuth) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: userAuth,
  };
};

export const signUpFail = (error) => {
  return {
    type: SIGNUP_FAIL,
    payload: error,
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (authUser) => {
  return {
    type: LOGIN_SUCCESS,
    payload: authUser,
  };
};

export const loginFail = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};

export const handleSignUp = (email, password) => {
  return (dispatch) => {
    dispatch(signUpRequest());
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(signUpSuccess(user));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(signUpFail(error.message));
      });
  };
};

export const handleLogin = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        dispatch(loginFail(error.message));
      });
  };
};
