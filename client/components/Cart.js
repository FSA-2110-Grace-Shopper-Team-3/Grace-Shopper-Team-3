import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrderItem } from '../store';

const Cart = () => {
  const orderItems = useSelector((state) => state.orderItems);
  const products = useSelector((state) => state.products);
  const userId = useSelector((state) => state.auth.id);

  const matchingOrder =
    useSelector((state) =>
      state.orders.find((order) => order.userId === userId)
    ) || {};

  const matchingOrderItems = orderItems.filter(
    (orderItem) => orderItem.orderId === matchingOrder.id
  );

  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {matchingOrderItems.map((orderItem) => {
          const cartItem =
            products.find((product) => product.id === orderItem.productId) ||
            {};
          return (
            <li key={orderItem.id}>
              {cartItem.brand} - {cartItem.model}
              Quantity:{orderItem.quantity}
              <button onClick={() => dispatch(deleteOrderItem(orderItem.id))}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
