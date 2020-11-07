import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem.jsx';

describe('tests in GifGridItem component', () => {
  const title = 'test gif';
  const url =
    'https://media1.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif?cid=5387cba3j9e063tiwnc295ppe1z8kq1ua2oigkzvhjtu8gym&rid=giphy.gif';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should show component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have src and alt attributes', () => {
    const image = wrapper.find('img');
    expect(image.prop('src')).toBe(url);
    expect(image.prop('alt')).toBe(title);
  });

  test('should have class animate__fadeIn', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('animate__fadeIn')).toBeTruthy();
  });
});
