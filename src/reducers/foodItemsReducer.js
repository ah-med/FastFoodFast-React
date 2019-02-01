import {
    GET_FOODITEMS
} from '../actions/types';

const initialState = {
    foodItems: []
  };

const foodItemsReducer = (state = initialState, action) => {
    const { foodItems } = action
  switch (action.type) {
    case GET_FOODITEMS:
      return {
        ...state,
        foodItems: foodItems
      };
    default:
      return state;
  }
};

export default foodItemsReducer;
