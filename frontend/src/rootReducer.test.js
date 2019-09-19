import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  GET_POST,
  VOTE
} from './actions/actionTypes';
import rootReducer from './rootReducer';

const INITIAL_STATE = {
  posts: {}
};


it('should return the initial state', () => {
  expect(rootReducer(undefined, {})).toEqual(INITIAL_STATE)
});

//https://github.com/ratxt1/redux-microblog/blob/master/src/rootReducer.test.js
// copied from redux docs on testing reducers
xdescribe('posts reducer', () => {
  beforeEach( () => {

  })


  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })
})