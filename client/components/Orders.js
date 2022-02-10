import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Orders = () => {
  const orders = useSelector((state) => state.orders);

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>Order ID: {order.id}</div>
      ))}
    </div>
  );
};

export default Orders;
