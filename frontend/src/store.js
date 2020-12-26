import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
 productListReducer,
 productDetailsReducer,
} from './reducers/product_Reducers';
import { cartReducer } from './reducers/cart_Reducers';
import {
 userLoginReducer,
 userRegisterReducer,
 userDetailsReducer,
 userUpdateProfileReducer,
} from './reducers/user_Reducers';
import { orderCreateReducer } from './reducers/order_Reducers';

const reducer = combineReducers({
 productList: productListReducer,
 productDetails: productDetailsReducer,
 cart: cartReducer,
 userLogin: userLoginReducer,
 userRegister: userRegisterReducer,
 userDetails: userDetailsReducer,
 userUpdateProfile: userUpdateProfileReducer,
 orderCreate: orderCreateReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
 ? JSON.parse(localStorage.getItem('cartItems'))
 : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
 ? JSON.parse(localStorage.getItem('userInfo'))
 : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
 ? JSON.parse(localStorage.getItem('shippingAddress'))
 : {};

const initialState = {
 cart: {
  cartItems: cartItemsFromStorage,
  shippingAddress: shippingAddressFromStorage,
 },
 userLogin: {
  userInfo: userInfoFromStorage,
 },
};

const middleware = [thunk];

const store = createStore(
 reducer,
 initialState,
 composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
