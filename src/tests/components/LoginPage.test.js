import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../components/auth/LoginPage.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      submitLoginForm: () => {},
      handleLoginInput: () => {},
      loading: true
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<LoginPage {...props} />);
    expect(wrapper.find('#signup').length).toBe(1);
  });
});
