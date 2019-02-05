
import React from 'react';
import { shallow } from 'enzyme';
import AddMealPage from '../../components/admin/AddMealPage.jsx';

describe('Unit test for create AddMealPage component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      onDraft: () => {},
      onPublish: () => {},
      inputHandler: () => {},
      submitHandler: () => {},
      fileHandler: () => {},
      selectedValue: 4,
      imageRef: ''
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<AddMealPage {...props} />);
    expect(wrapper.find('#main').length).toBe(1);
    expect(wrapper.find('.container').length).toBe(1);
  });
});
