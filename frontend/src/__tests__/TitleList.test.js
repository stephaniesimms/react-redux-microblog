import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TitleList } from '../containers/TitleList';

xit('renders without crashing', function () {
  shallow(<TitleList />);
});

xit('matches snapshot', function () {
  let wrapper = shallow(<TitleList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});