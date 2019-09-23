import * as actions from '../actions/actions';
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  LOAD_POSTS,
  VOTE,
  SHOW_ERROR
} from '../actions/actionTypes';

describe('actions', () => {
  it('should create an action to add a post', () => {
    const TEST_POST = {
      title: "test title",
      description: "test description",
      body: "test body"
    }

    const expectedAction = {
      type: ADD_POST,
      post: {
        title: "test title",
        description: "test description",
        body: "test body",
      }
    }
    expect(actions.addPost(TEST_POST)).toEqual(expectedAction)
  });

});