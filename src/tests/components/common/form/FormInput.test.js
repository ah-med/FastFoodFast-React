import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../../../../components/common/form/FormInput.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      labelName: '',
      inputType: '',
      handleInputChange: () => {},
      name:''
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<FormInput {...props} />);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('label').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
});
});
