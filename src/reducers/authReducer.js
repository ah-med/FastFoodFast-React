import {
    AUTH_ERROR,
    AUTHENTICATED
} from '../actions/types';

const initialState = {
  error: {},
  isAuthenticated: false,
};
const authReducer = (state = initialState, action) => {
  const { type, error } = action;
  switch (type) {
    case AUTH_ERROR:
      return {
        ...state,
        error,
      };
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default authReducer;
