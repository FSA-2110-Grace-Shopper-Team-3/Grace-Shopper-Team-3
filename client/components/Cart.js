import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrderItem, editOrderItem, addOrder, editOrder } from '../store';
import { Link, useHistory } from 'react-router-dom';

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
  console.log(matchingOrder);

  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <ul>
        {matchingOrderItems.map((orderItem) => {
          const cartItem =
            products.find((product) => product.id === orderItem.productId) ||
            {};
          return (
            <li key={orderItem.id}>
              <button onClick={() => dispatch(deleteOrderItem(orderItem.id))}>
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
      </ul>
      <button
        onClick={() => {
          dispatch(editOrder({ id: matchingOrder.id, isOrdered: true }));
          dispatch(addOrder({ userId: userId }));
          history.push('/orderPlaced');
        }}
      >
        Submit Order
      </button>
      <Link>View Order History</Link>
    </div>
  );
};

export default Cart;
