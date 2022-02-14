import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addOrderItem,
  editOrderItem,
  addGuestOrderItem,
  editGuestOrderItem,
} from '../store';
import { v4 as uuidv4 } from 'uuid';

const SingleProduct = () => {
  const { id } = useParams();
  const currentUserId = useSelector((state) => state.auth.id);
  const singleProduct =
    useSelector((state) =>
      state.products.find((product) => product.id === id)
    ) || {};

  const user = useSelector((state) => state.auth.id);
  const orders = useSelector((state) => state.orders);
  const orderItems = useSelector((state) => state.orderItems);
  const guestCart = useSelector((state) => state.guestOrderItems);
  const matchOrder =
    orders.find(
      (order) => order.userId === user && order.isOrdered === false
    ) || {};
  const dispatch = useDispatch();

  return (
    <div className="single-prod">
      <ul>
        <li>
          <img className="prod-img" src={singleProduct.img} />
        </li>
        <li>Brand: {singleProduct.brand}</li>
        <li>Model: {singleProduct.model}</li>
        <li>Price: ${singleProduct.price}</li>
        <li>Description: {singleProduct.description}</li>
        {/* <li>{singleProduct.category}</li> BACKEND ONLY? */}
      </ul>
      <button
        onClick={() => {
          if (!currentUserId) {
            const guestOrderItem = guestCart.find(
              (orderItem) =>
                orderItem.productId === singleProduct.id &&
                orderItem.userId === null
            );
            guestOrderItem
              ? dispatch(
                  editGuestOrderItem({
                    ...guestOrderItem,
                    id: guestOrderItem.id,
                    quantity: guestOrderItem.quantity + 1,
                  })
                )
              : dispatch(
                  addGuestOrderItem({
                    productId: singleProduct.id,
                    userId: null,
                    id: uuidv4(),
                    quantity: 1,
                  })
                );
          } else {
            const orderItem = orderItems.find(
              (orderItem) =>
                orderItem.productId === singleProduct.id &&
                orderItem.orderId === matchOrder.id
            );
            orderItem
              ? dispatch(
                  editOrderItem({
                    id: orderItem.id,
                    quantity: orderItem.quantity + 1,
                    userId: currentUserId,
                  })
                )
              : dispatch(
                  addOrderItem({
                    productId: singleProduct.id,
                    orderId: matchOrder.id,
                    userId: currentUserId,
                  })
                );
          }
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
