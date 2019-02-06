import React from 'react';
import { shallow } from 'enzyme';
import { NavBarContainer } from '../../containers/NavBarContainer.jsx';

describe('Test to successfully render <AddMealContainer />', () => {
  let wrapper;
    
  const propsObject = {
    totalCartItems: 4,
    isAuthenticated:true,
    userRole: {}
  };
  wrapper = shallow(<NavBarContainer {...propsObject}/>);
  it('renders the <AuthNavBar /> components', () => {
    expect(wrapper.length).toBe(1);
  });
  it('renders the < NoAuthNavBar /> components', () => {
      propsObject['isAuthenticated'] = false;
    expect(wrapper.length).toBe(1);
  });
});
