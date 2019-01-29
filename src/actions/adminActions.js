import toastr from 'toastr';
import { toastrOptions } from './constants';
import { Post } from '../utilities/axiosRequests';

import {
    LOADING_START,
    LOADING_STOP,
} from './types';


const startLoading = {
    type: LOADING_START
};

const stopLoading = {
    type: LOADING_STOP
};


const addMeal = (mealData) => async (dispatch) => {
    dispatch(startLoading);
    const {
        foodName,
        price,
        category,
        imageUrl
    } = mealData
    try {
        const mealResponse = await Post('/api/v1/menu', {
            foodName,
            price,
            category,
            imageUrl
        });
        if (mealResponse.data) {
            dispatch(stopLoading);
            toastr.success('meal added successfully!');
            toastr.options = toastrOptions;
        }
    }
    catch (error) {
        dispatch(stopLoading);
        toastr.error(error.response.data.error.description);
        toastr.options = toastrOptions;
    }
}

export default addMeal;
