import React from 'react';
import { shallow } from 'enzyme';
import MobileSideNav from '../../../../components/common/modals/MobileSideNav.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
        buttonValue: ''
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<MobileSideNav {...props} />);
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('li').length).toBe(3);
  });
});
