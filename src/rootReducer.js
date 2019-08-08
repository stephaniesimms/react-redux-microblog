import { ADD_POST, DELETE_POST, UPDATE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

const DEFAULT_STATE = {
  posts: {
    post1: {
      title: 'testpost',
      description: 'wednesdayyayay',
      body: "happy hump day y'all",
      comments: [
        {comment: "i agree", id: "f37168fd-922c-4b45-abc9-32bae93014d9"}
      ]
    }
  }
}

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_POST: {

    }
    case DELETE_POST: {

    }
    case UPDATE_POST: {

    }
    case ADD_COMMENT: {

    }
    case DELETE_COMMENT: {

    }
    default:
      return state;
  };
}

export default rootReducer;