import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import Homepage from '../components/Homepage';

it("renders without crashing", function () {
  shallow(<Homepage />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<Homepage />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});