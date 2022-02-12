/**
 * ACTION TYPES
 */
const GET_GUEST_ORDER_ITEMS = 'GET_GUEST_ORDER_ITEMS';
const ADD_GUEST_ORDER_ITEM = 'ADD_GUEST_ORDER_ITEM';

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

/**
 * REDUCER
 */

export const guestOrderItems = (state = [], action) => {
  switch (action.type) {
    case GET_GUEST_ORDER_ITEMS:
      return action.orderItems;
    case ADD_GUEST_ORDER_ITEM:
      return [...state, action.orderItem];
    default:
      return state;
  }
};
