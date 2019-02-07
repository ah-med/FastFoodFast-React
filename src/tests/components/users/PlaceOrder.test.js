import React from 'react';
import { shallow } from 'enzyme';

import PlaceOrder  from '../../../components/users/PlaceOrder.jsx';

describe('Test to successfully render <PlaceOrder />', () => {
  const propsObject = {
        closeModalHandler: () => {}, 
        displayCart: true, 
        totalAmount: 573, 
        placeOrderHandler: () => {},
        address: '',
        phoneNumber: 76878,
        inputChangeHandler: () => {}
  };

  let wrapper = shallow(<PlaceOrder {...propsObject}/>);
  it('renders the <PlaceOrder /> components', () => {
    expect(wrapper.length).toBe(1);
  });
  it('Should handle close modal', () => {
    wrapper.find('.click').simulate('click');
  });

  it('Should handle place order', () => {
    wrapper.find('#placeorder-form').simulate('submit');
  });

  it('Should handle address textarea change', () => {
    wrapper.find('#address').simulate('change');
  });
  it('Should handle phone number change', () => {
    wrapper.find('#phone-no').simulate('change');
  });
});
