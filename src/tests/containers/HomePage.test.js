import React from 'react';
import { shallow } from 'enzyme';
import { HomePageContainer } from '../../containers/HomePageContainer.jsx';

describe('Test to successfully render <AddMealContainer />', () => {

    let wrapper;
    
  const propsObject = {
    getAllFoodItems: jest.fn(() => {}),
    foodItems: {
        foodItems: []
    },
  };
  wrapper = shallow(<HomePageContainer{...propsObject}/>);
  it('renders the <HomePageContainer /> components', () => {
    expect(wrapper.length).toBe(1);
  });
});
