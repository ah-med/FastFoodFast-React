import React from 'react';
import { shallow } from 'enzyme';

import FoodSection  from '../../../components/users/FoodSection.jsx';

describe('Test to successfully render <FoodSection />', () => {
  const propsObject = {
        foodItems:[{}],
        sectionName: '',
  };

  let wrapper = shallow(<FoodSection {...propsObject}/>);
  it('renders the <FoodSection /> components', () => {
    expect(wrapper.length).toBe(1);
  });
});
