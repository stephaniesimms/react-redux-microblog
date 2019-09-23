import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { NewPost } from '../containers/NewPost';

it('renders without crashing', function () {
  shallow(<NewPost />);
});

it('matches snapshot', function () {
  let wrapper = shallow(<NewPost />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});