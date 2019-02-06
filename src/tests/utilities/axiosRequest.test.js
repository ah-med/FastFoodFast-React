import sinon from 'sinon'
import axios from 'axios'
import { request, Post, Get } from '../../utilities/axiosRequests';

describe('Unit tests axio Requests', () => {
    describe('axio method Get Post and Put', () => {
        test('should post a request ', () => {
            const responseData = {
                data: []
            }

            const stubPostMethod = sinon.stub(request, 'post').returns(responseData);
            const stubCreateMethod = sinon.stub(axios, 'create').returns(responseData);
            const postResponse = Post('/route', {});
            expect(postResponse).toMatchObject(Promise.resolve({}))
            stubPostMethod.restore();
            stubCreateMethod.restore();
        });

        test('should get a request ', () => {
            const responseData = {
                data: []
            }
            const useFn = () => { };
            const stubGetMethod = sinon.stub(request, 'get').returns(responseData);
            const stubInterceptorMethod = sinon.stub(request.interceptors.request, 'use').returns(useFn);
            const stubCreateMethod = sinon.stub(axios, 'create').returns(responseData);
            const postResponse = Get('/route', {});
            expect(postResponse).toMatchObject(Promise.resolve({}))
            stubGetMethod.restore();
            stubCreateMethod.restore();
            stubInterceptorMethod.restore();
        });
    })
})
