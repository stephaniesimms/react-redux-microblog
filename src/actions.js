import { ADD_POST, DELETE_POST, UPDATE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

//TODO: payload formatting
export function addPost(post) {
  return {
    type: ADD_POST,
    payload: {}
    }
}
