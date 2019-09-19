import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import PostForm from '../components/PostForm';

it("renders without crashing", function () {
  shallow(<PostForm />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<PostForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});