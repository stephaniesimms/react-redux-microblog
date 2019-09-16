import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  LOAD_POSTS,
  SHOW_ERROR,
  VOTE
} from './actions/actionTypes';

const DEFAULT_STATE = {
  posts: {}
}

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {

    // TODO: refactor this to loop through postList in helper function
    case LOAD_POSTS: {
      const postList = action.posts;
      
      const posts = {};
      for (let post of postList) {
        posts[post.id] = post;
      }
      return { ...state, posts };
    }

    case ADD_POST: {
      const postsCopy = { ...state.posts };
      action.post.comments = [];
      postsCopy[action.post.id] = action.post;

      return { ...state, posts: postsCopy };
    }

    case DELETE_POST: {
      const postsCopy = { ...state.posts };
      delete postsCopy[action.id];

      return { ...state, posts: postsCopy };
    }

    case UPDATE_POST: {
      const postsCopy = { ...state.posts };
      postsCopy[action.id] = { ...postsCopy[action.id], ...action.post};

      return { ...state, posts: postsCopy };
    }

    case GET_POST: {
      const post = {};
      post[action.post.id] = action.post;

      return { posts: post };
    }

    case ADD_COMMENT: {
      const postsCopy = { ...state.posts };
      const postCopy = postsCopy[action.postId];
      const comments = [...postCopy.comments, action.comment];

      return {
        ...state,
        posts: {
          ...postsCopy,
          [action.postId]: { ...postCopy, comments }
        }
      };
    }

    case DELETE_COMMENT: {
      const postsCopy = { ...state.posts };
      const postCopy = postsCopy[action.postId];
      const comments = postCopy.comments;

      // Remove comment by filtering
      const updatedComments = comments.filter(comment => comment.id !== action.commentId);

      return {
        ...state,
        posts: {
          ...postsCopy,
          [action.postId]: { ...postCopy, comments: updatedComments }
        }
      };
    }

    case VOTE: {
      const postsCopy = { ...state.posts };
      const postCopy = postsCopy[action.postId];
      
      return {
        ...state,
        posts: {
          ...postsCopy,
          [action.postId]: { ...postCopy, votes: action.votes }
        } 
      };
    }

    case SHOW_ERROR: {
      return { ...state, error: action.msg };
    }
    
    default:
      return state;
  };
}


export default rootReducer;