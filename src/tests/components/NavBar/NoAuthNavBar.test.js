import React from 'react';
import { shallow } from 'enzyme';
import  NoAuthNavBar from '../../../components/NavBar/NoAuthNavBar.jsx';

describe('Unit test for create NoAuthNavBar component. ', () => {
    const props = {
      isAuth: true
    };
  it('should render the header', () => {
    const wrapper = shallow(<NoAuthNavBar {...props} />);
    expect(wrapper.find('header').length).toBe(1);
  });
});
