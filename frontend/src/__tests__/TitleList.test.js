import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TitleList } from '../containers/TitleList';

//FIXME: determine correct way to mock titles
/**
 * Without any handling of the Titlelist properties we get the following error:
 * (node:31957) UnhandledPromiseRejectionWarning: TypeError: this.props.getPostsFromAPI is not a function
(node:31957) UnhandledPromiseRejectionWarning: Unhandled promise rejection.
 * 
 * To circumvent this we can do a hack: Feed in a `getPostsFromAPI` to mock setting a function that is
 *  then being called. This works since we disable the lifecycle methods and use a spy to check we call the
 *  lifecycle without actually executing it. However, the clean way to do it is to mock the Redux Store in
 *  order to have the connector set the property as it does in production. 
*/
const TITLES = [{id: 1, title: "test title", description: "test description", votes: 2}]

beforeAll(() => {
  global.fetch = jest.fn();
  //window.fetch = jest.fn(); if running browser environment
});

let wrapper;
beforeEach(() => {
  wrapper = shallow(<TitleList titles={TITLES} getPostsFromAPI={(x) => (x)}/>, { disableLifecycleMethods: true });
});

afterEach(() => {
  wrapper.unmount();
});


it('matches snapshot', function () {
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});


it('spy whether componentDidMount is called', () => {
  const spyDidMount = jest.spyOn(TitleList.prototype, "componentDidMount");

  fetch.mockImplementation(() => {
    return Promise.resolve({
      status: 200,
      json: () => {
        return Promise.resolve(TITLES);
      }
    });
  });

  wrapper.instance().componentDidMount();
  expect(spyDidMount).toHaveBeenCalled();

});
