import axios from 'axios';
import sinon from 'sinon';
import * as cloudUpload from '../../utilities/cloudinaryUpload';

describe('Unit tests for uploadinaryImage', () => {
    test('should get categories of food items', async () => {
        const response = {
           data: {
                secure_url: '/url'
            }
        }
        const stubPost = sinon.stub(axios, 'post').returns(response);
        const secureURL = await cloudUpload.uploadImageCloudinary('value');
        expect(secureURL).toEqual(response.data.secure_url);
        stubPost.restore()
    });
})
