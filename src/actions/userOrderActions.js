import toastr from 'toastr'

import { Post } from '../utilities/axiosRequests';
import {toastrOptions} from './constants';
import {
    ADD_CART,
    REMOVE_CART,
    CHECK_OUT_CART,
    PLACE_ORDER_SUCCESS
} from './types';

export const addCartItem = (item) => {
    return {
        type: ADD_CART,
        item
    }
}

export const removeCartItem = (item) => {
    return {
        type: REMOVE_CART,
        item
    }
}

export const toggleCheckOut = (totalAmount) => {
    return {
        type: CHECK_OUT_CART,
        totalAmount
    }
}

export const placeOrderSuccessCreator = {
    type: PLACE_ORDER_SUCCESS
}

export const placeOrder = (cart) => async (dispatch) => {
    // dispatch start loading
    // make api call
    const orderResponse = await Post('/api/v1/orders', cart);
    if (orderResponse.error) {
        // dispatch stop loading
        // if api fail dispatch place_order_fail and display error message
        toastr.error('Please login to an place order');
        toastr.options = toastrOptions;
    } else {
        toastr.success('Order placed successfully!');
        toastr.options = toastrOptions;
        // if api success, dispatch place_order_success and display success message
        dispatch(placeOrderSuccessCreator)
    }

}
