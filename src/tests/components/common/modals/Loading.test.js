import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../../../components/common/modals/Loading.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
        isLoading: true
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<Loading {...props} />);
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('span').length).toBe(1);
  });
});
