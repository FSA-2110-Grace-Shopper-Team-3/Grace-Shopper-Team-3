import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { editOrder, addOrder } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const OrderPlaced = () => {
  console.log('OrderPlaced rendered!!');
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id) || '';
  const matchingOrder =
    useSelector((state) =>
      state.orders.find(
        (order) => order.userId === userId && order.isOrdered === false
      )
    ) || {};
  const orders = useSelector((state) => state.orders);
  //-------------------Checkout Functionality---------------------//

  const [matchOrder, setMatchOrder] = useState(matchingOrder);

  // const [currentUserId, setCurrentUserId] = useState(userId);

  useEffect(() => {
    setMatchOrder(matchingOrder);
    const url = new URLSearchParams(window.location.search);
    console.log('matchOrder', matchingOrder);
    if (matchingOrder.id) {
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
  }, [matchOrder]);
  return (
    <div>
      Order placed!
      <Link to="/products">Back to Shopping</Link>
    </div>
  );
};

export default OrderPlaced;
