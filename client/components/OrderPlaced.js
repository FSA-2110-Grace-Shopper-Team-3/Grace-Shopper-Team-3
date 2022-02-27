import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { editOrder, addOrder, updateProd } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import Band from '../../public/images/band.png';

const OrderPlaced = () => {
  //-------------------Matching OrderItems --------------------//
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id) || '';
  const orders = useSelector((state) => state.orders) || [];
  const orderItems = useSelector((state) => state.orderItems) || [];
  const products = useSelector((state) => state.products) || [];

  const matchingOrder = orders.find((order) => 
    order.userId === userId && order.isOrdered === false) || {};

  const matchingOrderItems = orderItems.filter((orderItem) => 
    orderItem.orderId === matchingOrder.id) || [];

  const userCartPriceTotal = matchingOrderItems.reduce((acc, curr) => {
    const currentProduct = products.find((product) => product.id === curr.productId) || {};
    acc += currentProduct.price * curr.quantity;
    return acc;
  }, 0);

  const matchingOrderItemsQty = matchingOrderItems.map((item) => item.quantity);

  const matchingProducts = products.filter((product) => 
    matchingOrderItems.find((item) => item.productId === product.id)) || [];

  //-------------------Checkout Functionality---------------------//

  const url = new URLSearchParams(window.location.search);

  useEffect(() => {
    
    if (matchingOrder.id && matchingOrderItems.length > 0) {
      if (url.get('success')) {
        dispatch(
          editOrder({
            id: matchingOrder.id,
            isOrdered: true,
            totalPrice: userCartPriceTotal.toFixed(2),
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
    <div className="op">
      <div className="op-box">
        <h1>ORDER SUCCESSFUL</h1>
        <img src={Band} />
        <div className="op-desc">
          <h2>Let's jam!</h2>
          <p>
            Thank you for your purchase. We hope you are satisfied with your
            order!
          </p>
        </div>
        <Link className="react-link-ct" to="/orderhistory">
          View Order History
        </Link>
      </div>
    </div>
  );
};

export default OrderPlaced;
