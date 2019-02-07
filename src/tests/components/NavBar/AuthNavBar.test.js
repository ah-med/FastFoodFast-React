
import React from 'react';
import { shallow } from 'enzyme';
import  AuthNavBar from '../../../components/NavBar/AuthNavBar.jsx';

describe('Unit test for create AuthNavBar component. ', () => {
    const props = {
      role: 'string'
    };
  it('should render the header', () => {
    const wrapper = shallow(<AuthNavBar {...props} />);
    expect(wrapper.find('AdminNavBar').length).toBe(1);
  });
});
