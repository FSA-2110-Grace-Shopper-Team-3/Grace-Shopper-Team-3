import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

/**
 * ACTION TYPES
 */
const GET_ORDERS = 'GET_ORDERS';
const ADD_ORDER = 'ADD_ORDER';
const DELETE_ORDER = 'DELETE_ORDER';
const EDIT_ORDER = 'EDIT_ORDER';
const CREATE_GUEST_ORDER = 'CREATE_GUEST_ORDER';

/**
 * ACTION CREATORS
 */
const _getOrders = (orders) => ({ type: GET_ORDERS, orders });
const _addOrder = (order) => ({ type: ADD_ORDER, order });
const _editOrder = (order) => ({ type: EDIT_ORDER, order });
const _deleteOrder = (orderId) => ({ type: DELETE_ORDER, orderId });
// const _createGuestOrder = (order) => ({ type: CREATE_GUEST_ORDER, order });

/**
 * THUNK CREATORS
 */
export const getOrders = () => {
  return async (dispatch) => {
    const orders = (await axios.get('/api/orders')).data;
    dispatch(_getOrders(orders));
  };
};

export const addOrder = (order) => {
  return async (dispatch) => {
    const newOrder = (await axios.post('/api/orders', order)).data;
    dispatch(_addOrder(newOrder));
  };
};

export const editOrder = (order) => {
  return async (dispatch) => {
    order = (await axios.put(`/api/orders/${order.id}`, order)).data;
    dispatch(_editOrder(order));
  };
};

export const deleteOrder = (order) => {
  return async (dispatch) => {
    await axios.delete(`/api/orders/${order.id}`);
    dispatch(_deleteOrder(order.id));
  };
};

// export const createGuestOrder = (newGuestOrder) => {
//   return (dispatch) => {
//     newGuestOrder = {
//       id: uuidv4(),
//       isOrdered: false,
//       userId: null,
//       orderItems: [],
//     };
//     dispatch(_createGuestOrder(newGuestOrder));
//   };
// };

/**
 * REDUCER
 */

export const orders = (state = [], action) => {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders;
    // return [...state].concat(action.orders);
    case ADD_ORDER:
      return [...state, action.order];
    case DELETE_ORDER:
      return state.filter((order) => order.id !== action.orderId);
    case EDIT_ORDER:
      return state.map((order) =>
        order.id === action.order.id ? action.order : order
      );
    // case CREATE_GUEST_ORDER:
    //   return [...state, action.order];
    default:
      return state;
  }
};
