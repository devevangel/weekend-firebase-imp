import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from "./postTypes";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CREATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
