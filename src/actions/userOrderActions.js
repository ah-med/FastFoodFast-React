
import {
    UPDATE_CART,
} from './types';

const updateCartItem = (cart) => {
    return {
        type: UPDATE_CART,
        cart
    }
}

export default updateCartItem;
