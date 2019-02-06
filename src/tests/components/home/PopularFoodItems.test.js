import React from 'react';
import { shallow } from 'enzyme';
import PopularFoodItems from '../../../components/home/PopularFoodItems.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
        foodItems: []
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<PopularFoodItems {...props} />);
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('a').length).toBe(1);
});
});
