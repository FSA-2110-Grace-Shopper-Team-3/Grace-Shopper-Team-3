import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { editOrder, addOrder } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const OrderPlaced = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id) || '';
  const orders = useSelector((state) => state.orders) || [];
  const orderItems = useSelector((state) => state.orderItems) || [];
  const matchingOrder =
    orders.find(
      (order) => order.userId === userId && order.isOrdered === false
    ) || {};
  const matchingOrderItems =
    orderItems.filter((orderItem) => orderItem.orderId === matchingOrder.id) ||
    [];

  //-------------------Checkout Functionality---------------------//

  const url = new URLSearchParams(window.location.search);

  useEffect(() => {
    console.log('useEffect called!!');
    if (matchingOrder.id && matchingOrderItems.length > 0) {
      if (url.get('success')) {
        dispatch(
          editOrder({
            id: matchingOrder.id,
            isOrdered: true,
            // totalPrice: 150,
          })
        );
        dispatch(addOrder({ userId: userId }));
      }
    }
  }, [matchingOrderItems.length]);
  return (
    <div>
      Order placed!
      <Link to="/products">Back to Shopping</Link>
    </div>
  );
};

export default OrderPlaced;
