import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as axiosRequests from '../../utilities/axiosRequests';
import * as types from '../../actions/types';
import { loginUser, signupUser } from '../../actions/authActions';
import * as auth from '../../utilities/auth';

const middleware = [thunk];
const mockStore = ConfigureMockStore(middleware);

describe('Unit tests for the auth actions', () => {
    const userData = {};
    describe('Unit tests for the action creators', () => {
        it('should signup a user ', async () => {
            const response = {
                data: {
                    token: 'token'
                },
                error: ''
            }
            const isAuthenticated = () => {
                return {
                    type: types.AUTHENTICATED,
                    isAuthenticated: true,
                    role:undefined
                }
            };
            const stubPostMethod = sinon.stub(axiosRequests, 'Post').returns(response);
            const stubParseJwt = sinon.stub(auth, 'parseJwt').returns('user')
            const store = mockStore({});
            store.dispatch(loginUser(userData, history)).then(() => {
                expect(store.getActions()[2]).toMatchObject(isAuthenticated());
                stubPostMethod.restore();
                stubParseJwt.restore();
            });
        });
        it('should login a user ', async () => {
            const isAuthenticated = () => {
                return {
                    type: types.AUTHENTICATED,
                    isAuthenticated: true,
                    role:'user'
                }
            };
            const store = mockStore({});
            store.dispatch(signupUser(userData, history)).then(() => {
                expect(store.getActions()[2]).toMatchObject(isAuthenticated());
            });
        });
    })
})
