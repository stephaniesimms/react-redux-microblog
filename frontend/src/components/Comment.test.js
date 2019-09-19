import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import Comment from '../components/Comment';

it("renders without crashing", function () {
  shallow(<Comment />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<Comment />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});