import React from 'react';
import { shallow } from 'enzyme';

import { PlaceOrderContainer }  from '../../containers/PlaceOrderContainer.jsx';

describe('Test to successfully render <PlaceOrderContainer />', () => {
  const propsObject = {
        cart: [{}],
        checkOutCartAction: () => {},
        placeOrderAction:  () => {},
        isCheckOut: true,
        totalAmount: 67
  };
  const inputChangeEvent = {
    preventDefault: () => {},
    target:{
      name: 'address',
      value: 'street',
    }
  };
  const placeOrderEvent = {
    preventDefault: () => {},
    target:{
      name: 'price',
      value: 34
    }
  };

  const wrapper = shallow(<PlaceOrderContainer {...propsObject}/>);
  it('renders the <PlaceOrderContainer /> components', () => {
    expect(wrapper.length).toBe(1);
  });
  it('Should handle input change', () => {
    const instance = wrapper.instance();
    instance.handleInputChange(inputChangeEvent)
    expect(wrapper.state('address')).toBe('street');
  });
  it('Should handle place order', () => {
    const instance = wrapper.instance();
    instance.handlePlaceOrder(placeOrderEvent)
    expect(wrapper.state('address')).toBe('street');
  });
  it('Should handle close modal', () => {
    const instance = wrapper.instance();
    instance.handleCloseModal()
  });
});
