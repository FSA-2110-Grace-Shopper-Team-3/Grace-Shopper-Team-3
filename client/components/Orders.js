import { flexbox, textAlign } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Orders = () => {
  const orders = useSelector((state) =>
    state.orders.filter((order) => order.isOrdered)
  );

  return orders.length > 0 ? (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {orders.map((order) => (
        <div key={order.id}>Order ID: {order.id}</div>
      ))}
    </div>
  ) : (
    <h4>There are currently no orders placed</h4>
  );
};

export default Orders;
