import axios from 'axios'
import baseUrl from './constants';
import closeAlert from './alertActions';
import { 
    reDirectLogin, 
    parseJwt, 
    setUserData 
} from '../utilities/auth';

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
        const signupResponse = await axios.post(`${baseUrl}/api/v1/auth/signup`, userData);
        if (signupResponse.status === 201) {
            const loginResponse = await axios.post(`${baseUrl}/api/v1/auth/login`, userData);
            dispatch(stopLoading);
            dispatch(isAuthenticated);
            setUserData(loginResponse.data.data.token);
            const { role } =  parseJwt(loginResponse.data.data.token);
            reDirectLogin(role, history);
        }
    }
    catch (error) {
        dispatch(stopLoading);
        dispatch(closeAlert(false));
        dispatch(authError(error.response.data.error));
    }
}

export default signupUser;
