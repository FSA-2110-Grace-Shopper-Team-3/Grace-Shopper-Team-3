/**
 * ACTION TYPES
 */
const GET_GUEST_ORDER_ITEMS = 'GET_GUEST_ORDER_ITEMS';
const ADD_GUEST_ORDER_ITEM = 'ADD_GUEST_ORDER_ITEM';
const DELETE_GUEST_ORDER_ITEM = 'DELETE_GUEST_ORDER_ITEM';
const EDIT_GUEST_ORDER_ITEM = 'EDIT_GUEST_ORDER_ITEM';

/**
 * ACTION CREATORS
 */
const _getGuestOrderItems = (orderItems) => ({
  type: GET_GUEST_ORDER_ITEMS,
  orderItems,
});

const _addGuestOrderItem = (orderItem) => ({
  type: ADD_GUEST_ORDER_ITEM,
  orderItem,
});

const _deleteGuestOrderItem = (orderItemId) => ({
  type: DELETE_GUEST_ORDER_ITEM,
  orderItemId,
});

const _editGuestOrderItem = (orderItem) => ({
  type: EDIT_GUEST_ORDER_ITEM,
  orderItem,
});

/**
 * THUNK CREATORS
 */
export const getGuestOrderItems = () => {
  return (dispatch) => {
    const orderItems = JSON.parse(localStorage.getItem('orderitems'));
    dispatch(_getGuestOrderItems(orderItems));
  };
};

export const addGuestOrderItem = (orderItem) => {
  return (dispatch) => {
    orderItem = { ...orderItem };
    dispatch(_addGuestOrderItem(orderItem));
  };
};

export const deleteGuestOrderItem = (orderItemId) => {
  return (dispatch) => {
    const matchingOrderItem =
      JSON.parse(localStorage.getItem('orderitems')).find(
        (guestOrderItem) => guestOrderItem.id === orderItemId
      ) || {};
    dispatch(_deleteGuestOrderItem(matchingOrderItem.id));
  };
};

export const editGuestOrderItem = (orderItem) => {
  return (dispatch) => {
    dispatch(_editGuestOrderItem(orderItem));
  };
};

/**
 * REDUCER
 */

export const guestOrderItems = (state = [], action) => {
  switch (action.type) {
    case GET_GUEST_ORDER_ITEMS:
      return action.orderItems;
    case ADD_GUEST_ORDER_ITEM:
      return [...state, action.orderItem];
    case DELETE_GUEST_ORDER_ITEM:
      return state.filter((item) => item.id !== action.orderItemId);
    case EDIT_GUEST_ORDER_ITEM:
      return state.map((item) =>
        item.id === action.orderItem.id ? action.orderItem : item
      );
    default:
      return state;
  }
};
