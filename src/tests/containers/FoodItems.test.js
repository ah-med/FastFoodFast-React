import React from 'react';
import { shallow } from 'enzyme';

import { FoodItemsContainer }  from '../../containers/FoodItemsContainer.jsx';

describe('Test to successfully render <FoodItemsContainer />', () => {
  const propsObject = {
    getAllFoodItems: jest.fn(() => {}),
    foodItems: {
      foodItems: [{
        foodName: '',
        foodId: '',
        imageUrl: '',
        price:3
      }]
    }
  };

  let wrapper = shallow(<FoodItemsContainer {...propsObject}/>);
  it('renders the <FoodItemsContainer /> components', () => {
    expect(wrapper.length).toBe(1);
  });
});
