import React from 'react';
import { shallow } from 'enzyme';
import { ProtectedRoute } from '../../components/ProtectedRoute.jsx';

import FoodCard from '../../components/common/FoodCard.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      auth: true,
      path:"/DUMMYPATH", 
      component:{FoodCard}
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<ProtectedRoute {...props} />);
  });
});
