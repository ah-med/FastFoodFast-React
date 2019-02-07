
import React from 'react';
import { shallow } from 'enzyme';
import  AdminNavBar from '../../../components/NavBar/AdminNavBar.jsx';

describe('Unit test for create AddMealPage component. ', () => {
    const props = {
      isAuth: true,
      type: 'string'
    };
  it('should render the header', () => {
    const wrapper = shallow(< AdminNavBar {...props} />);
    expect(wrapper.find('header').length).toBe(1);
  });
});
