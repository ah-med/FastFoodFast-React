import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../../../components/common/modals/Modal.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
        children: []
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('#modals').length).toBe(1);
  });
});
