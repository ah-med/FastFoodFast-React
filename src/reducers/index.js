import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  alert: alertReducer
});

export default rootReducer;
