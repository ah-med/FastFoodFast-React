import { Post } from '../utilities/axiosRequests';
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



const loginUser = (userData, history) => async (dispatch) => {
    dispatch(startLoading);
    try {
        const response = await Post('/api/v1/auth/login', userData);
        dispatch(stopLoading);
        dispatch(isAuthenticated);
        setUserData(response.data.token);
        const { role } =  parseJwt(response.data.token);
        reDirectLogin(role, history);
    }
    catch (error) {
        dispatch(stopLoading);
        dispatch(closeAlert(false));
        dispatch(authError(error.response.data.error));
    }
}

export default loginUser;
