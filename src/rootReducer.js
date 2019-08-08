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
      const postsCopy = {...state.posts};
      postsCopy[action.postId] = action.post;

      return {...state, posts: postsCopy};
    }
    case DELETE_POST: {
      const postsCopy = {...state.posts};
      delete postsCopy[action.id];

      return {...state, posts: postsCopy};
    }
    case UPDATE_POST: {
      const postsCopy = {...state.posts};
      postsCopy[action.postId] = action.post;

      return {...state, posts: postsCopy};
    }
    case ADD_COMMENT: {
      const postsCopy = {...state.posts};
      const post = postsCopy[action.postId];
      post.comments = [...post.comments, action.comment];

      return {...state, posts: postsCopy};
    }
    case DELETE_COMMENT: {
      const postsCopy = {...state.posts};
      const post = postsCopy[action.postId];
      const comments = post.comments;

      // Remove comment by filtering
      const updatedComments = comments.filter(comment => comment.id !== action.commentId);
      post.comments = updatedComments;

      return {...state, posts: postsCopy}
    }
    default:
      return state;
  };
}

export default rootReducer;