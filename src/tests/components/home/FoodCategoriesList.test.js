import React from 'react';
import { shallow } from 'enzyme';
import FoodCategoriesList from '../../../components/home/FoodCategoriesList.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  it('should render the header', () => {
    wrapper = shallow(<FoodCategoriesList />);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('a').length).toBe(7);
    expect(wrapper.find('h2').length).toBe(1);
});
});
