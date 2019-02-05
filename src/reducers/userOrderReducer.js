import {
  UPDATE_CART,
} from '../actions/types';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  const { cart } = action
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: cart
      };
    default:
      return state;
  }
};

export default cartReducer;
