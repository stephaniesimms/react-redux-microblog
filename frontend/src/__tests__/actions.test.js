import * as actions from '../actions/actions';
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POST,
  LOAD_POSTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  VOTE,
  SHOW_ERROR
} from '../actions/actionTypes';

describe('post actions', () => {
  it('should create an action to add a post', () => {
    const TEST_POST = {
      title: 'test title',
      description: 'test description',
      body: 'test body'
    }

    const expectedAction = {
      type: ADD_POST,
      post: {
        title: 'test title',
        description: 'test description',
        body: 'test body',
      }
    }
    expect(actions.addPost(TEST_POST)).toEqual(expectedAction)
  });

  it('should create an action to delete a post', () => {
    const expectedAction = {
      type: DELETE_POST,
      id: 1
    };

    expect(actions.deletePost(1)).toEqual(expectedAction)
  });

  it('should create an action to edit/update a post', () => {
    const EDITED_POST = {
      title: 'test title edited',
      description: 'test description edited',
      body: 'test body edited'
    };

    const expectedAction = {
      type: UPDATE_POST,
      post: {
        title: 'test title edited',
        description: 'test description edited',
        body: 'test body edited'
      },
      id: 1
    };
    expect(actions.updatePost(EDITED_POST, 1)).toEqual(expectedAction)
  });

  it('should create an action to get a post', () => {
    const TEST_POST = {
      id: 1,
      title: 'test title',
      description: 'test description',
      body: 'test body',
      votes: 2,
      comments: []
    }

    const expectedAction = {
      type: GET_POST,
      post: {
        id: 1,
        title: 'test title',
        description: 'test description',
        body: 'test body',
        votes: 2,
        comments: []
      }
    };
    expect(actions.getPost(TEST_POST)).toEqual(expectedAction)
  });

  it('should create an action to load posts', () => {
    const TEST_POSTS = [
      {
        id: 1,
        title: 'test title',
        description: 'test description',
        body: 'test body',
        votes: 2,
        comments: []
      },
      {
        id: 2,
        title: 'second test title',
        description: 'second test description',
        body: 'second test body',
        votes: 5,
        comments: []
      }
    ]

    const expectedAction = {
      type: LOAD_POSTS,
      posts: [
        {
          id: 1,
          title: 'test title',
          description: 'test description',
          body: 'test body',
          votes: 2,
          comments: []
        },
        {
          id: 2,
          title: 'second test title',
          description: 'second test description',
          body: 'second test body',
          votes: 5,
          comments: []
        }
      ]
    };
    expect(actions.gotPosts(TEST_POSTS)).toEqual(expectedAction)
  });
});

describe('comment and voting actions', () => {
  it('should create an action to add a comment', () => {
    const TEST_COMMENT = {
      comment: 'awesome post'
    }

    const expectedAction = {
      type: ADD_COMMENT,
      postId: 1,
      comment: {
        comment: 'awesome post'
      }
    }
    expect(actions.addComment(1, TEST_COMMENT)).toEqual(expectedAction)
  });

  it('should create an action to delete a comment', () => {
    const expectedAction = {
      type: DELETE_COMMENT,
      postId: 1,
      commentId: 5
    }
    expect(actions.deleteComment(1, 5)).toEqual(expectedAction)
  });

  it('should create an action to vote', () => {
    const expectedAction = {
      type: VOTE,
      postId: 1,
      votes: 3
    }
    expect(actions.vote(1, 3)).toEqual(expectedAction)
  });  
});
