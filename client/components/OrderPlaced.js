import React from 'react';
import { Link } from 'react-router-dom';

const OrderPlaced = () => {
  return (
    <div>
      Order placed!
      <Link to="/products">Back to Shopping</Link>
    </div>
  );
};

export default OrderPlaced;
