import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_ORDER_ITEM = 'GET_ORDER_ITEM';
const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM';
const DELETE_ORDER_ITEM = 'DELETE_ORDER_ITEM';
const EDIT_ORDER_ITEM = 'EDIT_ORDER_ITEM';

/**
 * ACTION CREATORS
 */
const _getOrderItems = (orderItems) => ({ type: GET_ORDER_ITEM, orderItems });
const _addOrderItem = (orderItem) => ({ type: ADD_ORDER_ITEM, orderItem });
const _editOrderItem = (orderItem) => ({ type: EDIT_ORDER_ITEM, orderItem });
const _deleteOrderItem = (orderItemId) => ({
  type: DELETE_ORDER_ITEM,
  orderItemId,
});

/**
 * THUNK CREATORS
 */
export const getOrderItems = () => {
  return async (dispatch) => {
    const orderItems = (await axios.get('/api/orderitems')).data;
    dispatch(_getOrderItems(orderItems));
  };
};

export const addOrderItem = (order) => {
  return async (dispatch) => {
    order = (await axios.post('/api/orderitems', order)).data;
    dispatch(_addOrderItem(order));
  };
};

export const editOrderItem = (orderItem) => {
  return async (dispatch) => {
    orderItem = (await axios.put(`/api/orderitems/${orderItem.id}`, orderItem))
      .data;
    dispatch(_editOrderItem(orderItem));
  };
};

export const deleteOrderItem = (orderItemId) => {
  return async (dispatch) => {
    await axios.delete(`/api/orderitems/${orderItemId}`);
    dispatch(_deleteOrderItem(orderItemId));
  };
};

/**
 * REDUCER
 */

export const orderItems = (state = [], action) => {
  switch (action.type) {
    case GET_ORDER_ITEM:
      return action.orderItems;
    case ADD_ORDER_ITEM:
      return [...state, action.orderItem];
    case DELETE_ORDER_ITEM:
      return state.filter((order) => order.id !== action.orderItemId);
    case EDIT_ORDER_ITEM:
      return state.map((order) =>
        order.id === action.orderItem.id ? action.orderItem : order
      );
    default:
      return state;
  }
};
