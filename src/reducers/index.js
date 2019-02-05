import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import foodItemsReducer from './foodItemsReducer';
import cartReducer from './userOrderReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  foodItems: foodItemsReducer,
  cart: cartReducer
});

export default rootReducer;
