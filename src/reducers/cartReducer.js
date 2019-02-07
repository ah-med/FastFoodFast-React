import {
    ADD_CART,
    REMOVE_CART,
    PLACE_ORDER_SUCCESS
} from '../actions/types';

const initialState = []

const cartReducer = (state = initialState, action) => {
    const { item } = action
    switch (action.type) {
        case ADD_CART:
            if (state.length === 0) {
                return [
                    item
                ]
            } else {
                const itemIndex = state.findIndex((element) => element.foodId === item.foodId);
                if (itemIndex === -1 ) {
                    return [
                        ...state,
                        item
                    ]
                }
                return state.map(cartItem => {
                    if (item.foodId === cartItem.foodId ) {
                        return {...cartItem, quantity: item.quantity}
                    }
                    return cartItem
                })
            }
        case REMOVE_CART:
            return state.filter(cartItem => {
                if (item.foodId !== cartItem.foodId ) {
                    return cartItem
                }
            })
        case PLACE_ORDER_SUCCESS:
            return initialState
        default:
            return state;
    }
};

export default cartReducer;
