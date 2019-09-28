import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from '../components/NotFound';

it('renders without crashing', function () {
  shallow(<NotFound />);
});

it('matches snapshot', function () {
  let wrapper = shallow(<NotFound />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});