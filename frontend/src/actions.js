import { ADD_POST, DELETE_POST, UPDATE_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_TITLES } from "./actionTypes";
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/posts/';

export function getTitlesFromAPI() {
  return async function(dispatch) {
    // dispatch(startLoad());
    
    try {
      let res = await axios.get(BASE_URL);
      console.log("RESPONSE:", res);
      dispatch(gotTitles(res.data));

    } catch(error) {
      // dispatch(showErr(error.res.data));
    }
  }
}

function gotTitles(titles) {
  return { type: LOAD_TITLES, titles };
}

// send post object containing title, description, body from PostForm to backend
// {title, description, body}
export function sendPostToAPI(post) {
  return async function(dispatch) {
    try {
      let res = await axios.post(BASE_URL, post);
      dispatch(addPost(res.data)); // FUTURE TO DO: ADD TO REDUX STORE POSTS (BONUS)
    } catch (error) {
    // dispatch(showErr(error.res.data));
    }
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
    }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
    }
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
    }
}

export function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    comment
    }
}

export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
    }
}

// function startLoad() {
//   return { type: "SHOW_SPINNER" };
// }

// function showErr(msg) {
//   return { type: "SHOW_ERR", msg };
// }