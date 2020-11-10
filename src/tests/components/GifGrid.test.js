import React from 'react';
import GifGrid from '../../components/GifGrid.jsx';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { shallow } from 'enzyme';

jest.mock('../../hooks/useFetchGifs');

describe('tests in GifGrid component', () => {
  const category = 'Rick and Morty';

  test('should show component', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when images are feteched with useFetchGifs', () => {
    const images = [
      {
        id: 'abc',
        url: 'https://yes/yes.jpg',
        title: 'idk',
      },
      {
        id: 'abcd',
        url: 'https://yes/yes.jpg',
        title: 'idk2',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: images,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(images.length);
  });
});
