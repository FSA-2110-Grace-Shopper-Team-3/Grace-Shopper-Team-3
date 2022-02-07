import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_ORDERS = 'GET_ORDERS';
const ADD_ORDER = 'ADD_ORDER';
const DELETE_ORDER = 'DELETE_ORDER';
const EDIT_ORDER = 'EDIT_ORDER';

/**
 * ACTION CREATORS
 */
const _getOrders = (orders) => ({ type: GET_ORDERS, orders });
const _addOrder = (order) => ({ type: ADD_ORDER, order });
const _editOrder = (order) => ({ type: EDIT_ORDER, order });
const _deleteOrder = (orderId) => ({ type: DELETE_ORDER, orderId });

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

/**
 * REDUCER
 */

export const orders = (state = [], action) => {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders;
    case ADD_ORDER:
      return [...state, action.order];
    case DELETE_ORDER:
      return state.filter((order) => order.id !== action.orderId);
    case EDIT_ORDER:
      return state.map((order) =>
        order.id === action.order.id ? action.order : order
      );
    default:
      return state;
  }
};
