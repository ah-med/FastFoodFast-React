import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import foodItemsReducer from './foodItemsReducer';
import cartStatusReducer from './userOrderReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  foodItems: foodItemsReducer,
  cartStatus: cartStatusReducer,
  cart: cartReducer
});

export default rootReducer;
