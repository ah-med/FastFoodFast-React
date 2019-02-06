import React from 'react';
import { shallow } from 'enzyme';
import HowItWorks from '../../../components/home/HowItWorks.jsx';

describe('Unit test for create HowItWorks component. ', () => {
  let wrapper;
  it('should render the HowItWorks', () => {
    wrapper = shallow(<HowItWorks />);
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('#how-it-works').length).toBe(1);
});
});
