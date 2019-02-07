import * as types from '../../actions/types';
import { addCartItem, removeCartItem, toggleCheckOut  } from '../../actions/userOrderActions';


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
    })
})
