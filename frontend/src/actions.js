import { ADD_POST, DELETE_POST, UPDATE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

export function addPost(post, postId) {
  return {
    type: ADD_POST,
    postId,
    post
    }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
    }
}

export function updatePost(post, postId) {
  return {
    type: UPDATE_POST,
    postId,
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