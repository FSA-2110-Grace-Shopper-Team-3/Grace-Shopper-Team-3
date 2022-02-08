import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_ORDER_PROD = 'GET_ORDER_PROD';
const ADD_ORDER_PROD = 'ADD_ORDER_PROD';
const DELETE_ORDER_PROD = 'DELETE_ORDER_PROD';
const EDIT_ORDER_PROD = 'EDIT_ORDER_PROD';

/**
 * ACTION CREATORS
 */
const _getOrderProds = (orderProds) => ({ type: GET_ORDER_PROD, orderProds });
const _addOrderProd = (orderProd) => ({ type: ADD_ORDER_PROD, orderProd });
const _editOrderProd = (orderProd) => ({ type: DELETE_ORDER_PROD, orderProd });
const _deleteOrderProd = (orderProdId) => ({
  type: EDIT_ORDER_PROD,
  orderProdId,
});

/**
 * THUNK CREATORS
 */
export const getOrderProds = () => {
  return async (dispatch) => {
    const orderProds = (await axios.get('/api/orderitems')).data;
    dispatch(_getOrderProds(orderProds));
  };
};

export const addOrderProd = (order) => {
  return async (dispatch) => {
    order = (await axios.post('/api/orderitems', order)).data;
    dispatch(_addOrderProd(order));
  };
};

export const editOrderProd = (orderProd) => {
  return async (dispatch) => {
    orderProd = (await axios.put(`/api/orderitems/${orderProd.id}`, orderProd))
      .data;
    dispatch(_editOrderProd(orderProd));
  };
};

export const deleteOrderProd = (orderProd) => {
  return async (dispatch) => {
    await axios.delete(`/api/orderitems/${orderProd.id}`);
    dispatch(_deleteOrderProd(orderProd.id));
  };
};

/**
 * REDUCER
 */

export const orderItems = (state = [], action) => {
  switch (action.type) {
    case GET_ORDER_PROD:
      return action.orderProds;
    case ADD_ORDER_PROD:
      return [...state, action.orderProd];
    case DELETE_ORDER_PROD:
      return state.filter((order) => order.id !== action.orderProdId);
    case EDIT_ORDER_PROD:
      return state.map((order) =>
        order.id === action.order.id ? action.orderProd : order
      );
    default:
      return state;
  }
};
