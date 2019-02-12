import toastr from 'toastr';
import { toastrOptions } from './constants';
import { Post } from '../utilities/axiosRequests';
import getErrorMessage from '../utilities/getErrorMessage';
import {
    reDirectLogin,
    parseJwt,
    setUserData
} from '../utilities/auth';

import {
    LOADING_START,
    LOADING_STOP,
    AUTHENTICATED,
} from './types';


export const startLoading = {
    type: LOADING_START
};
const isAuthenticated = (role) => {
    return {
        type: AUTHENTICATED,
        isAuthenticated: true,
        role
    }
};
export const stopLoading = {
    type: LOADING_STOP
};


export const loginUser = (userData, history) => async (dispatch) => {
    dispatch(startLoading);
    try {
        const response = await Post('/api/v1/auth/login', userData);
        if (response.error) {
            toastr.error('email/password mismatch');
            toastr.options = toastrOptions;
        }
        const { role } = parseJwt(response.data.token);
        dispatch(stopLoading);
        dispatch(isAuthenticated(role));
        setUserData(response.data.token);
        reDirectLogin(role, history);
    }
    catch (error) {
        dispatch(stopLoading);
        toastr.warning('Something is not right, please try again later');
        toastr.options = toastrOptions;
    }
}

export const signupUser = (userData, history) => async (dispatch) => {
    dispatch(startLoading);
    try {
        const signupResponse = await Post('/api/v1/auth/signup', userData);
        dispatch(stopLoading);
        if (signupResponse.message === 'Account created successfully') {
            dispatch(loginUser(userData, history));
        }
        if (signupResponse.error && signupResponse.error.status === 409) {
            toastr.error('A user with the provided email exists');
            toastr.options = toastrOptions;
        }
        if (signupResponse.error && signupResponse.error.status === 422) {
            const errorMessage = getErrorMessage(signupResponse.error.fields);
            toastr.error(errorMessage);
            toastr.options = toastrOptions;
        }
    }
    catch (error) {
        dispatch(stopLoading);
        toastr.warning('Something is not right, please try again later');
        toastr.options = toastrOptions;
    }
}

