
import { Get } from '../utilities/axiosRequests';
import {
    GET_FOODITEMS
  } from './types';
import {startLoading, stopLoading} from './authActions';

  
  export const foodItemsCreator = foodItems => ({
    type: GET_FOODITEMS,
    foodItems
  });
  

  export const getFoodItems = () => async (dispatch) => {
    dispatch(startLoading);
    try {
      const response = await Get('/api/v1/menu');
      dispatch(foodItemsCreator(response.data));
      dispatch(stopLoading)
    } catch (error) {
      dispatch(stopLoading);
      return error;
    }
  };
