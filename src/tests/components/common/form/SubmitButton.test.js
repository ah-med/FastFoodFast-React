import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../../../../components/common/form/SubmitButton.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
        buttonValue: ''
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<SubmitButton {...props} />);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
  });
});
