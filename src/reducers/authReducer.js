import {
    AUTHENTICATED
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  role: ''
};
const authReducer = (state = initialState, action) => {
  const { type, role } = action;
  switch (type) {
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
        role: role
      };
    default:
      return state;
  }
};

export default authReducer;
