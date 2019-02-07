import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { AddMealContainer } from '../../containers/AddMealContainer.jsx';
import * as cloudinary from '../../utilities/cloudinaryUpload';

describe('Test to successfully render <AddMealContainer />', () => {
    let wrapper;    
  const propsObject = {
    addMealAction: jest.fn((data) => data)
  };
 
  const blob = new Blob([JSON.stringify( {hello: "world"}, null, 2)], {type : 'application/json'});
  const fileChangeEvent = {
    preventDefault: () => {},
    target:{
      files:[blob],
      result:""
    }
  };
  const inputChangeEvent = {
    preventDefault: () => {},
    target:{
      name: 'price',
      value: 34
    }
  };
  const submitFormEvent = {
    preventDefault: () => {},
  };
  const imageUrl = '/url'
  wrapper = shallow(<AddMealContainer {...propsObject}/>);
  it('renders the <AddMealContainer /> components', () => {
    expect(wrapper.length).toBe(1);
  });
  it('Should handle file change', () => {
    const instance = wrapper.instance();
    instance.fileChangeHandler(fileChangeEvent)
  });
  it('Should handle input change', () => {
    const instance = wrapper.instance();
    instance.onChangeInputHandler(inputChangeEvent)
    expect(wrapper.state('price')).toBe(34);
  });
  it('Should handle input change', async () => {
    const stubCloudinary = sinon.stub(cloudinary, 'uploadImageCloudinary').returns(imageUrl)
    const instance = wrapper.instance();
    await instance.submitFormHandler(submitFormEvent)
    stubCloudinary.restore();
  });
});
