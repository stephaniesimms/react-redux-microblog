import { ADD_POST, DELETE_POST, UPDATE_POST, GET_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_TITLES, SHOW_ERROR } from './actionTypes';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/posts';

export function getTitlesFromAPI() {
  return async function(dispatch) {
    const res = await axios.get(`${BASE_URL}`);
    dispatch(gotTitles(res.data));
  }
}

function gotTitles(titles) {
  return { type: LOAD_TITLES, titles };
}

// send post object containing title, description, body from PostForm to backend
// {title, description, body}
export function sendPostToAPI(post) {
  return async function(dispatch) {
    const res = await axios.post(BASE_URL, post);
    dispatch(addPost(res.data)); 
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
    }
}

export function getPostFromAPI(id) {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${BASE_URL}/${id}`);

      if (res.data === '') {
        throw new Error('Cannot find post');
      }
      dispatch(getPost(res.data));
    } catch (error) {
      dispatch(showErr(error))
    }
  } 
}

function getPost(post) {
  return {
    type: GET_POST,
    post
  }
}

export function sendDeleteToAPI(id) {
  return async function(dispatch) {
    await axios.delete(`${BASE_URL}/${id}`);
    dispatch(deletePost(id));
  }
}

function deletePost(id) {
  return {
    type: DELETE_POST,
    id
    }
}

export function sendUpdateToAPI(post, id) {
  return async function(dispatch) {
    await axios.put(`${BASE_URL}/${id}`, post);
    dispatch(updatePost(post, id));
  }
}

function updatePost(post, id) {
  return {
    type: UPDATE_POST,
    post,
    id
    }
}

// TODO:
//    GET COMMENTS
//    POST COMMENTS
//    DELETE COMMENTS

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

function showErr(msg) {
  return { type: SHOW_ERROR, msg };
}