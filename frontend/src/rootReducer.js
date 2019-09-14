import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  LOAD_TITLES,
  SHOW_ERROR,
  VOTE
} from './actions/actionTypes';

const DEFAULT_STATE = {
  posts: {},
  titles: []
}

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {

    case LOAD_TITLES: {
      const titles = action.titles;
      return { ...state, titles };
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
      postsCopy[action.id] = action.post;

      return { ...state, posts: postsCopy };
    }

    case GET_POST: {
      const postsCopy = { ...state.posts };
      postsCopy[action.post.id] = action.post;

      return { ...state, posts: postsCopy };
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