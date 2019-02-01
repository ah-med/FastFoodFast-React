import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import alertReducer from './alertReducer';
import foodItemsReducer from './foodItemsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  alert: alertReducer,
  foodItems: foodItemsReducer
});

export default rootReducer;
