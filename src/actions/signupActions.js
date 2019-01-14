import axios from 'axios'
import baseUrl from './constants';
import closeAlert from './alertActions';

import {
    LOADING_START,
    LOADING_STOP,
    AUTH_ERROR,
    AUTHENTICATED,
} from './types';


const startLoading = {
    type: LOADING_START
};
const isAuthenticated = {
    type: AUTHENTICATED,
    isAuthenticated: true
};
const stopLoading = {
    type: LOADING_STOP
};

const authError = (error) => {
    return {
        type: AUTH_ERROR,
        error
    }
};

const signupUser = (userData, history) => async (dispatch) => {
    dispatch(startLoading);
    try {
        await axios.post(`${baseUrl}/api/v1/auth/signup`, userData);
        dispatch(stopLoading);
        dispatch(isAuthenticated);
        history.push('/login');
    }
    catch (error) {
        dispatch(stopLoading);
        dispatch(closeAlert(false));
        dispatch(authError(error.response.data.error));
    }
}

export default signupUser;
