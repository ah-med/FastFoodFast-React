import * as types from '../../actions/types';
import updateCartItem from '../../actions/userOrderActions';


describe('Unit tests for the auth actions', () => {
    describe('Unit tests for the action creators', () => {
        it('should update the cart', () => {
            const cart = []
            const expectedAction = {
                type: types.UPDATE_CART,
                cart
            };

            expect(updateCartItem(cart))
              .toMatchObject(expectedAction);
          });
    })
})
