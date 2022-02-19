import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

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
          const date = new Date(matchingOrder.updatedAt);
          const formattedDate = dateFormat(date, 'paddedShortDate');
          return (
            <div key={matchingOrder.id} className="oh-order">
              <div className="oh-order-id">
                <div>
                  <span>ORDER # </span>
                  {matchingOrder.id}
                </div>
                <div>
                  <span>ORDER PLACED </span>
                  {formattedDate}
                </div>
              </div>
              <div className="oh-order-items">
                {matchingOrderItems.map((matchingOrderItem) => {
                  const productItem = products.find(
                    (product) => product.id === matchingOrderItem.productId
                  );
                  return (
                    <div key={matchingOrderItem.id} className="oh-order-item">
                      <div className="oh-order-item-img">
                        <img src={productItem.img} />
                      </div>
                      <div className="oh-order-item-desc">
                        <Link to={`/products/${matchingOrderItem.productId}`}>
                          <h4>{productItem.model}</h4>
                        </Link>
                        <div>
                          {productItem.brand} - {productItem.category}
                        </div>
                        <div>QTY: {matchingOrderItem.quantity}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="oh-order-items-total">
                <h3>TOTAL ${matchingOrder.totalPrice}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderHistory;
