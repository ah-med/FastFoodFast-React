import {
    LOADING_START,
    LOADING_STOP,
} from '../actions/types';


const initialState = {
  isLoading: false,
};
const loadingReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true
      };
    case LOADING_STOP:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default loadingReducer;
