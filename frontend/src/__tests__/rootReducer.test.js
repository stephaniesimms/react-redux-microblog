import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POST,
  LOAD_POSTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  VOTE
} from '../actions/actionTypes';
import rootReducer from '../rootReducer';


let action;
let state;

const INITIAL_STATE = {
  posts: {}
};

it('should return the initial state', () => {
  expect(rootReducer(undefined, {})).toEqual(INITIAL_STATE)
});

describe('rootReducer ADD_POST', () => {
  beforeEach(() => {
    action = {
      type: ADD_POST,
      post: {
        id: 10,
        title: 'Test title',
        description: 'Test description',
        body: 'Test body',
        comments: []
      }
    }
    state = { posts: {} }
  });

  it('should add a post to state.posts', () => {
    expect(rootReducer(state, action)).toEqual({
      posts: {
        10: {
          title: 'Test title',
          description: 'Test description',
          body: 'Test body',
          id: 10,
          comments: []
        }
      }
    });
  });

  it('should be a pure function', () => {
    rootReducer(state, action);
    expect(state).toEqual({ posts: {} });
  });
});


describe('rootReducer DELETE_POST', () => {
  beforeEach(() => {
    action = {
      type: DELETE_POST,
      id: 10
    }
    state = {
      posts: {
        10: {
          title: 'Test title',
          description: 'Test description',
          body: 'Test body',
          comments: []
        }
      }
    }
  });

  it('should delete a post from state.posts using the post id', () => {
    expect(rootReducer(state, action)).toEqual({
      posts: {}
    });
  });

  it('should be a pure function', () => {
    rootReducer(state, action);
    expect(state).toEqual({
      posts: {
        10: {
          title: 'Test title',
          description: 'Test description',
          body: 'Test body',
          comments: []
        }
      }
    });
  });
});


describe('rootReducer UPDATE_POST', () => {
  beforeEach(() => {
    action = {
      type: UPDATE_POST,
      id: 10,
      post: {
        title: 'Updated title',
        description: 'Updated description',
        body: 'Updated body'
      }
    }
    state = {
      posts: {
        10: {
          title: 'Test title',
          description: 'Test description',
          body: 'Test body',
          comments: []
        }
      }
    }
  });

  it('should update a post using the post id and new content', () => {
    expect(rootReducer(state, action)).toEqual({
      posts: {
        10: {
          title: 'Updated title',
          description: 'Updated description',
          body: 'Updated body',
          comments: []
        }
      }
    });
  });

  it('should be a pure function', () => {
    rootReducer(state, action);
    expect(state).toEqual({
      posts: {
        10: {
          title: 'Test title',
          description: 'Test description',
          body: 'Test body',
          comments: []
        }
      }
    });
  });
});


describe('rootReducer GET_POST', () => {
  beforeEach(() => {
    action = {
      type: GET_POST,
      id: 10,
      post: {
        id: 10,
        title: 'Test title',
        description: 'Test description',
        body: 'Test body',
        votes: 3
      }
    }
    state = {
      posts: {}
    }
  });

  it('should get a post using from the backend using the post id', () => {
    expect(rootReducer(state, action)).toEqual({
      posts: {
        10: {
          title: 'Test title',
          description: 'Test description',
          body: 'Test body',
          id: 10,
          votes: 3
        }
      }
    });
  });

  it('should be a pure function', () => {
    rootReducer(state, action);
    expect(state).toEqual({
      posts: {}
    });
  });
});


describe('rootReducer LOAD_POSTS', () => {
  beforeEach(() => {
    action = {
      type: LOAD_POSTS,
      posts: [
        {
          id: 10,
          title: 'Test title',
          description: 'Test description',
          body: 'Test body',
          votes: 3
        },
        {
          id: 11,
          title: 'Awesome title',
          description: 'Awesome description',
          body: 'Awesome body',
          votes: 7
        }
      ]
    };
    state = {
      posts: {}
    }
  });

  it('should load all posts from the backend', () => {
    expect(rootReducer(state, action)).toEqual({
      posts: {
        10: {
          title: 'Test title',
          description: 'Test description',
          body: 'Test body',
          id: 10,
          votes: 3
        },
        11: {
          id: 11,
          title: 'Awesome title',
          description: 'Awesome description',
          body: 'Awesome body',
          votes: 7
        }
      }
    });
  });

  it('should be a pure function', () => {
    rootReducer(state, action);
    expect(state).toEqual({
      posts: {}
    });
  });
});


describe('rootReducer ADD_COMMENT', () => {
  beforeEach(() => {
    action = {
      type: ADD_COMMENT,
      postId: 10,
      comment: {
        comment: 'Test comment',
        commentId: 1
      }
    }
    state = {
      posts: {
        10: {
          id: 10,
          title: 'Test title',
          description: 'Test description',
          body: 'Test body',
          comments: []
        }
      }
    }
  });

  it('should add a comment', () => {
    // console.log(state, action)
    expect(rootReducer(state, action)).toEqual({
      posts: {
        10: {
          id: 10,
          title: 'Test title',
          description: 'Test description',
          body: 'Test body',
          comments: [
            { 
              commentId: 1,
              comment: 'Test comment',
            }
          ]
        }
      }
    });
  });

  xit('should be a pure function', () => {
    rootReducer(state, action);
    expect(state).toEqual({ posts: {} });
  });
});
