import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TitleList } from '../containers/TitleList';

//FIXME: determine correct way to mock titles
//this approach throws an error for both tests in the console although they both pass??
/**(node:31957) UnhandledPromiseRejectionWarning: TypeError: this.props.getPostsFromAPI is not a function
(node:31957) UnhandledPromiseRejectionWarning: Unhandled promise rejection. */
const TITLES = [{id: 1, title: "test title", description: "test description", votes: 2}]

it('renders without crashing', function () {
  shallow(<TitleList titles={TITLES}/>);
});

it('matches snapshot', function () {
  let wrapper = shallow(<TitleList titles={TITLES}/>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});