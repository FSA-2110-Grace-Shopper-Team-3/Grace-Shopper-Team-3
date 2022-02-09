import React from 'react';
import { useSelector } from 'react-redux';

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
  // console.log(matchingOrderItems);

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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
