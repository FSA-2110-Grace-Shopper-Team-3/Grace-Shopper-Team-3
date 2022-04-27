import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import { products } from './products';
import { users } from './users';
import { orders } from './order';
import { orderItems } from './orderItems';
import { guestOrderItems } from './guestOrderItems';

const reducer = combineReducers({
  auth,
  products,
  users,
  orders,
  orderItems,
  guestOrderItems,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
export * from './products';
export * from './users';
export * from './order';
export * from './orderItems';
export * from './guestOrderItems';
