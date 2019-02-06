import React from 'react';
import { shallow } from 'enzyme';
import { SignupContainer } from '../../containers/SignupContainer.jsx';

describe('Test to successfully render <AddMealContainer />', () => {

    let wrapper;
    
  const propsObject = {
    signupAction: jest.fn(() => {}),
    loading:true,
    history: {}
  };
  wrapper = shallow(<SignupContainer {...propsObject}/>);
  it('renders the <SignupContainer /> components', () => {
    expect(wrapper.length).toBe(1);
  });
});
