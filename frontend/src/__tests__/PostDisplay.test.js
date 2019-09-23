import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostDisplay from '../components/PostDisplay';

it('renders without crashing', function () {
  shallow(<PostDisplay post="test" />);
});

it('matches snapshot', function () {
  let wrapper = shallow(<PostDisplay post="test"/>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});