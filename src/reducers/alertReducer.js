import {
  CLOSE_ALERT_TRUE, CLOSE_ALERT_FALSE
} from '../actions/types';


const initialState = {
  closeAlert: true
};
const alertReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case CLOSE_ALERT_TRUE:
      return {
        ...state,
        closeAlert: true
      };
    case CLOSE_ALERT_FALSE:
      return {
        ...state,
        closeAlert: false
      };
    default:
      return state;
  }
};

export default alertReducer;
