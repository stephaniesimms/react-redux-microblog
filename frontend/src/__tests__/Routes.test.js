import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Routes from '../components/Routes';

it('renders without crashing', function () {
  shallow(<Routes />);
});

it('matches snapshot', function () {
  let wrapper = shallow(<Routes />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});