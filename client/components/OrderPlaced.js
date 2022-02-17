import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { editOrder, addOrder, updateProd } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const OrderPlaced = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id) || '';
  const orders = useSelector((state) => state.orders) || [];
  const orderItems = useSelector((state) => state.orderItems) || [];
  const products = useSelector((state) => state.products) || [];

  const matchingOrder =
    orders.find(
      (order) => order.userId === userId && order.isOrdered === false
    ) || {};
  const matchingOrderItems =
    orderItems.filter((orderItem) => orderItem.orderId === matchingOrder.id) ||
    [];

  const matchingOrderItemsQty = matchingOrderItems.map((item) => item.quantity);

  const matchingProducts =
    products.filter((product) =>
      matchingOrderItems.find((item) => item.productId === product.id)
    ) || [];

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
          })
        );
        dispatch(addOrder({ userId: userId }));

        matchingOrderItemsQty.map((qty) =>
          matchingProducts.map((product) =>
            dispatch(
              updateProd({ ...product, quantity: product.quantity - qty })
            )
          )
        );
      }
    }
  }, [matchingOrderItems.length]);
  return (
    <div>
      Order placed!
      <Link to="/orderhistory">View Order History</Link>
    </div>
  );
};

export default OrderPlaced;
