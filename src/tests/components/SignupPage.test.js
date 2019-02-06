import React from 'react';
import { shallow } from 'enzyme';
import SignupPage from '../../components/auth/SignUpPage.jsx';

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
    wrapper = shallow(<SignupPage {...props} />);
    expect(wrapper.find('#signup').length).toBe(1);
  });
});
