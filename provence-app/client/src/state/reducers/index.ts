import { isLoginOpenedReducer } from './isLoginOpened';
import { combineReducers } from 'redux';
import { isRegistrationOpenedReducer } from './isRegistrationOpened';
import { loginReducer } from './loginReducer';
import registrationReducer from './registrationReducer';
import { getDishesReducer } from './getDishesReducer';
import { searchReducer } from './searchReducer';
import { cartReducer } from './cartReducer';

export const reducers = combineReducers({
  loginForm: isLoginOpenedReducer,
  registrationForm: isRegistrationOpenedReducer,
  loginUser: loginReducer,
  registrationUser: registrationReducer,
  dishesData: getDishesReducer,
  search: searchReducer,
  cart: cartReducer,
});