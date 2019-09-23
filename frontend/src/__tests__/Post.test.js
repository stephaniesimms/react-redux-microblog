import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Post } from '../containers/Post';

it('renders without crashing', function () {
  shallow(<Post />);
});

it('matches snapshot', function () {
  let wrapper = shallow(<Post />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});