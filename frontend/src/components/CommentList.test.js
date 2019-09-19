import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import CommentList from '../components/CommentList';

it("renders without crashing", function () {
  shallow(<CommentList />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<CommentList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});