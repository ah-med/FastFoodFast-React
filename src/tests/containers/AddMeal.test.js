import React from 'react';
import { shallow } from 'enzyme';

import { AddMealContainer } from '../../containers/AddMealContainer.jsx';
import AddMealPage from '../../components/admin/AddMealPage.jsx';

describe('Test to successfully render <AddMealContainer />', () => {
    let wrapper;    
  const propsObject = {
    addMealAction: jest.fn((data) => data)
  };
  const event2 = {
    target: {
      name: '',
      value: ''
    },
  };
  wrapper = shallow(<AddMealContainer {...propsObject}/>);
  it('renders the <AddMealContainer /> components', () => {
    expect(wrapper.length).toBe(1);
  });
  it('Should handle input change', () => {
    wrapper.find(AddMealPage).simulate('inputHandler', event2);
  });
});
