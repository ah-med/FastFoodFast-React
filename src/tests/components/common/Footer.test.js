import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../components/common/Footer.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
        name:''
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<Footer {...props} />);
    expect(wrapper.find('footer').length).toBe(1);
  });
});
