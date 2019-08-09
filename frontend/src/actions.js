import { ADD_POST, DELETE_POST, UPDATE_POST, GET_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_TITLES, REDIRECT } from "./actionTypes";
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/posts';

export function getTitlesFromAPI() {
  return async function(dispatch) {
    // dispatch(startLoad());
    
    try {
      const res = await axios.get(`${BASE_URL}`);
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
      const res = await axios.post(BASE_URL, post);
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

// TODO: create show error action creator to handle
// case where res.data === '' - nonexistent post ID
export function getPostFromAPI(id) {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${BASE_URL}/${id}`);
      if (res.data === "") throw new Error("nope");
      dispatch(getPost(res.data));
    } catch (error) {
      console.log(error)
      dispatch(redirect())
    }
  } 
}

function getPost(post) {
  return {
    type: GET_POST,
    post
  }
}

export function sendDeleteToAPI (id) {
  return async function(dispatch) {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      dispatch(deletePost(id));
    } catch(error) {
      // dispatch(showErr(error.res.data));
    }
  }
}

function deletePost(id) {
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

//this doesn't work as we hoped it would - tried to redirect
//requests for a post ID that doesn't exist but can only display
//Loading... msg. Solution code exhibits same behavior.
//can refactor this action creator to show an error message/page
//for other UI error handling cf. Andrew and Chantal's approach
// following comments below for showErr(msg)
export function redirect() {
  return {
    type: REDIRECT
  }
}

// function startLoad() {
//   return { type: "SHOW_SPINNER" };
// }

// function showErr(msg) {
//   return { type: "SHOW_ERR", msg };
// }