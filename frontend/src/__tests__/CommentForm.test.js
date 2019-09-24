import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CommentForm from '../components/CommentForm';

it('renders without crashing', function () {
  shallow(<CommentForm />);
});

it('matches snapshot', function () {
  let wrapper = shallow(<CommentForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});