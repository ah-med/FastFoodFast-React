import {
  CHECK_OUT_CART,
  PLACE_ORDER_SUCCESS
} from '../actions/types';

const initialState = {
  isCheckOut: false,
  totalAmount: null
};

// when adding to cart, it should update the cart array with the item
//                      it should calculate and update the totalAmount for items in the cart

// when removing from cart, it should update the quantity of the item in the array
//                      it should calculate and update the totalAmount for items in the cart


const cartStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_OUT_CART:
      if (action.totalAmount) {
        return Object.assign({}, state, {
          isCheckOut: !state.isCheckOut,
          totalAmount: action.totalAmount
        })
      }
      return Object.assign({}, state, {
        isCheckOut: !state.isCheckOut
      })
    case PLACE_ORDER_SUCCESS:
      return initialState
    default:
      return state;
  }
};

export default cartStatusReducer;
