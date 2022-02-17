import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
  const currentUserId = useSelector((state) => state.auth.id) || '';
  const orderItems = useSelector((state) => state.orderItems) || [];
  const products = useSelector((state) => state.products) || [];
  const matchingOrders =
    useSelector((state) =>
      state.orders.filter(
        (order) => order.userId === currentUserId && order.isOrdered === true
      )
    ) || [];

  return (
    <div className="oh">
      <div className="oh-title">
        <h1>ORDER HISTORY</h1>
      </div>
      <div className="oh-list">
        {matchingOrders.map((matchingOrder) => {
          const matchingOrderItems =
            orderItems.filter(
              (orderItem) => orderItem.orderId === matchingOrder.id
            ) || [];
          return (
            <div key={matchingOrder.id} className="oh-order">
              <p>Order #: {matchingOrder.id}</p>
              <ul>
                {matchingOrderItems.map((matchingOrderItem) => {
                  const productItem = products.find(
                    (product) => product.id === matchingOrderItem.productId
                  );
                  return (
                    <li key={matchingOrderItem.id}>
                      {productItem.brand} - {productItem.model} - Quantity:{' '}
                      {matchingOrderItem.quantity}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderHistory;
