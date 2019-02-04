import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import foodItemsReducer from './foodItemsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  foodItems: foodItemsReducer
});

export default rootReducer;
