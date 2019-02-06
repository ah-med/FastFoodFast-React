import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../../components/home/HomePage.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
        popularFoodItems:[]
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<HomePage {...props} />);
    expect(wrapper.find('HowItWorks').length).toBe(1);
  });
});
