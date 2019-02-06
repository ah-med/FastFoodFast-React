import React from 'react';
import { shallow } from 'enzyme';
import { LoginContainer } from '../../containers/LoginContainer.jsx';

describe('Test to successfully render <AddMealContainer />', () => {
  let wrapper;  
  const propsObject = {
    loginAction: jest.fn(() => {}),
    loading:true,
    history: {}
  };


  wrapper = shallow(<LoginContainer {...propsObject}/>);
  it('renders the <LoginContainer /> components', () => {
    expect(wrapper.length).toBe(1);
  });
});
