import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteOrderItem,
  editOrderItem,
  addOrder,
  editOrder,
  deleteGuestOrderItem,
  editGuestOrderItem,
} from '../store';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const orderItems = useSelector((state) => state.orderItems);
  const products = useSelector((state) => state.products);
  const userId = useSelector((state) => state.auth.id);

  const matchingOrder =
    useSelector((state) =>
      state.orders.find(
        (order) => order.userId === userId && order.isOrdered === false
      )
    ) || {};

  const matchingOrderItems = orderItems.filter(
    (orderItem) => orderItem.orderId === matchingOrder.id
  );

  const userCartPriceTotal = matchingOrderItems.reduce((acc, curr) => {
    const currentProduct =
      products.find((product) => product.id === curr.productId) || {};
    acc += currentProduct.price * curr.quantity;
    return acc;
  }, 0);

  const dispatch = useDispatch();
  const history = useHistory();

  //-------------------Guest Cart Functionality---------------------//

  const guestCart = useSelector((state) => state.guestOrderItems);

  const guestCartPriceTotal = guestCart.reduce((acc, curr) => {
    const currentProduct =
      products.find((product) => product.id === curr.productId) || {};
    acc += currentProduct.price * curr.quantity;
    return acc;
  }, 0);

  useEffect(() => {
    localStorage.setItem('orderitems', JSON.stringify(guestCart));
  }, [guestCart]);

  return (
    <div>
      <ul>
        {!userId ? (
          <div>
            {guestCart.map((orderItem) => {
              const cartItem =
                products.find(
                  (product) => product.id === orderItem.productId
                ) || {};
              return (
                <li key={orderItem.id}>
                  <button
                    onClick={() => dispatch(deleteGuestOrderItem(orderItem.id))}
                  >
                    x
                  </button>
                  <Link to={`/products/${orderItem.productId}`}>
                    {cartItem.brand} - {cartItem.model}
                  </Link>{' '}
                  Quantity:{orderItem.quantity}
                  <button
                    onClick={() =>
                      dispatch(
                        editGuestOrderItem({
                          ...orderItem,
                          quantity: orderItem.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        editGuestOrderItem({
                          ...orderItem,
                          quantity: orderItem.quantity - 1,
                        })
                      )
                    }
                    disabled={orderItem.quantity === 1}
                  >
                    -
                  </button>
                </li>
              );
            })}
            <h2>Total Price: {guestCartPriceTotal.toFixed(2)}</h2>
          </div>
        ) : (
          <div>
            {matchingOrderItems.map((orderItem) => {
              const cartItem =
                products.find(
                  (product) => product.id === orderItem.productId
                ) || {};
              return (
                <li key={orderItem.id}>
                  <button
                    onClick={() => dispatch(deleteOrderItem(orderItem.id))}
                  >
                    x
                  </button>
                  <Link to={`/products/${orderItem.productId}`}>
                    {cartItem.brand} - {cartItem.model}
                  </Link>{' '}
                  Quantity:{orderItem.quantity}
                  <button
                    onClick={() =>
                      dispatch(
                        editOrderItem({
                          id: orderItem.id,
                          quantity: orderItem.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        editOrderItem({
                          id: orderItem.id,
                          quantity: orderItem.quantity - 1,
                        })
                      )
                    }
                    disabled={orderItem.quantity === 1}
                  >
                    -
                  </button>
                </li>
              );
            })}
            <h2>Total Price: {userCartPriceTotal.toFixed(2)}</h2>
          </div>
        )}
      </ul>
      <button
        onClick={() => {
          dispatch(
            editOrder({
              id: matchingOrder.id,
              isOrdered: true,
              totalPrice: userCartPriceTotal.toFixed(2),
            })
          );
          dispatch(addOrder({ userId: userId }));
          history.push('/orderPlaced');
        }}
      >
        Submit Order
      </button>
      <form action="/api/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form>
      <Link to="/orderhistory">View Order History</Link>
    </div>
  );
};

export default Cart;
