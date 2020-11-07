import React from 'react';
import AddCategory from '../../components/AddCategory.jsx';
import { shallow } from 'enzyme';

describe('tests in AddCategory component', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should show component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change input', () => {
    const input = wrapper.find('input');
    const value = 'hello world';
    input.simulate('change', { target: { value } });
  });

  test('should not post categories on submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories function and clean input', () => {
    const value = 'hello world';

    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
