import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const orderProducts = useSelector((state) => state.orderProducts);
  const products = useSelector((state) => state.products);

  return (
    <div>
      <ul>
        {orderProducts.map((orderProduct, idx) => {
          const cartItem =
            products.find((product) => product.id === orderProduct.productId) ||
            {};
          return (
            <li key={idx}>
              {cartItem.brand} - {cartItem.model}
              Quantity:{orderProduct.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
