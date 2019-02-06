
import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../../../components/common/form/Form.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      children: '',
      handleFormSubmit: () => {}
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<Form {...props} />);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('form').length).toBe(1);
  });
});
