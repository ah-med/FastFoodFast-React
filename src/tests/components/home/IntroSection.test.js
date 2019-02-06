import React from 'react';
import { shallow } from 'enzyme';
import IntroSection from '../../../components/home/IntroSection.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  it('should render the header', () => {
    wrapper = shallow(<IntroSection />);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('#intro').length).toBe(1);
});
});
