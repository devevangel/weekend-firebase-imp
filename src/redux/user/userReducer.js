import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./userTypes";

const initialState = {
  loading: false,
  authUser: {},
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        laoding: false,
        authUser: action.payload,
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authUser: action.payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        authUser: {},
      };

    default:
      return state;
  }
};

export default userReducer;
