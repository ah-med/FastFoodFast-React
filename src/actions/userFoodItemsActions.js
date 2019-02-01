
import { Get } from '../utilities/axiosRequests';
import {
    GET_FOODITEMS
  } from './types';
  
  export const foodItemsCreator = foodItems => ({
    type: GET_FOODITEMS,
    foodItems
  });
  

  export const getFoodItems = () => async (dispatch) => {
    try {
      const response = await Get('/api/v1/menu');
      dispatch(foodItemsCreator(response.data));
    } catch (error) {
      return error;
    }
  };
