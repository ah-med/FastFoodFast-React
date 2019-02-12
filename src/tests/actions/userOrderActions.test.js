import sinon from 'sinon';
import toastr from 'toastr';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import * as types from '../../actions/types';
import * as axiosRequest from '../../utilities/axiosRequests';
import { addCartItem, removeCartItem, toggleCheckOut, placeOrder  } from '../../actions/userOrderActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Unit tests for the auth actions', () => {
    describe('Unit tests for the user Orders action creators', () => {
        it('should add item to cart', () => {
            const item = {}
            const expectedAction = {
                type: types.ADD_CART,
                item
            };

            expect(addCartItem(item))
              .toMatchObject(expectedAction);
          });
          it('should remove item from cart', () => {
            const item = {}
            const expectedAction = {
                type: types.REMOVE_CART,
                item
            };

            expect(removeCartItem(item))
              .toMatchObject(expectedAction);
          });
          it('should toggle cart checkout', () => {
            const totalAmount = 6795
            const expectedAction = {
                type: types.CHECK_OUT_CART,
                totalAmount
            };

            expect(toggleCheckOut(totalAmount))
              .toMatchObject(expectedAction);
          });
          it('should send an error for place order', async () => {
            const initialState = {
                isCheckOut: false,
                totalAmount: null
              };
            const spyToastrError = sinon.spy(toastr, 'error');
            const store = mockStore(initialState);
            await store.dispatch(placeOrder([]));
            expect(spyToastrError.callCount).toBe(1);
            spyToastrError.restore();
          });
          it('should successfully place an order', async () => {
            const initialState = {
                isCheckOut: false,
                totalAmount: null
              };
            const orderResponse = {
                error: false
            }
            const spyToastrSuccess = sinon.spy(toastr, 'success');
            const stubPostRequest = sinon.stub(axiosRequest, 'Post').returns(orderResponse);
            const store = mockStore(initialState);
            await store.dispatch(placeOrder([]));
            expect(spyToastrSuccess.callCount).toBe(1);
            spyToastrSuccess.restore();
            stubPostRequest.restore();
          });
    })
})
