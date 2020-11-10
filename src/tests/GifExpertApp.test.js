import React from 'react';
import GifExpertApp from '../GifExpertApp.jsx';
import { shallow } from 'enzyme';

describe('tests in GifExpertApp component', () => {
  test('should show component', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show categories', () => {
    const categories = ['Messi', 'Ronaldo'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
