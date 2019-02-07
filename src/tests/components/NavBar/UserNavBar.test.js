import React from 'react';
import { shallow } from 'enzyme';
import  UserNavBar from '../../../components/NavBar/UserNavBar.jsx';

describe('Unit test for create UserNavBar component. ', () => {
    const props = {
      isAuth: true,
      type: 'string',
      totalCartItems: 544
    };
  it('should render the header', () => {
    const wrapper = shallow(<UserNavBar {...props} />);
    expect(wrapper.find('header').length).toBe(1);
  });
});
