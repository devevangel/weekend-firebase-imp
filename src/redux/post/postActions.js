import { database } from "../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from "./postTypes";

const collectionRef = collection(database, "posts");

export const createPostRequest = () => {
  return {
    type: CREATE_POST_REQUEST,
  };
};

export const createPostSuccess = () => {
  return {
    type: CREATE_POST_SUCCESS,
  };
};

export const createPostFail = (error) => {
  return {
    type: CREATE_POST_FAIL,
    payload: error,
  };
};

export const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST,
  };
};

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getPostsFail = (error) => {
  return {
    type: GET_POSTS_FAIL,
    payload: error,
  };
};

export const handleFetchPosts = (query) => {
  return (dispatch) => {
    dispatch(getPostsRequest());
    getDocs(collectionRef)
      .then((response) => {
        dispatch(
          getPostsSuccess(
            response.docs.map((item) => {
              return { ...item.data(), id: item.id };
            })
          )
        );
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getPostsFail(error.message));
      });
  };
};

export const handleCreatePost = (userPost, nav) => {
  return (dispatch) => {
    dispatch(createPostRequest);
    addDoc(collectionRef, userPost)
      .then(() => {
        dispatch(createPostSuccess());
        nav("/feeds");
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(createPostFail(error.message));
      });
  };
};
