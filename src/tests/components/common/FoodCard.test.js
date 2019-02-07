import React from 'react';
import { shallow } from 'enzyme';

import { FoodCard }  from '../../../components/common/FoodCard.jsx';

describe('Test to successfully render <FoodCard />', () => {
  const propsObject = {

        foodName: '',
        foodId: 3,
        imageUrl: '',
        price:3,
        category: '',
        cart: [{}],
        checkOutCartAction: () => {},
        addCartItemAction:  () => {},
        removeCartItemAction:  () => {}
  };

  let wrapper = shallow(<FoodCard {...propsObject}/>);
  it('renders the <FoodCard /> components', () => {
    expect(wrapper.length).toBe(1);
  });
  it('Should handle place order', () => {
    wrapper.find('.action-btn').simulate('click');
  });

  it('Should handle remove item from cart', () => {
    wrapper.find('#minus').simulate('click');
  });

  it('Should handle add item to cart', () => {
    wrapper.find('#plus').simulate('click');
  });
});
