import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addOrderItem,
  editOrderItem,
  addGuestOrderItem,
  editGuestOrderItem,
} from '../store';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { ToastContainer, Slide, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

const SingleProduct = () => {
  const notify = () => toast.success('added to cart!');
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentUserId = useSelector((state) => state.auth.id) || '';
  const singleProduct =
    useSelector((state) =>
      state.products.find((product) => product.id === id)
    ) || {};

  const orders = useSelector((state) => state.orders);
  const orderItems = useSelector((state) => state.orderItems);

  const guestCart = useSelector((state) => state.guestOrderItems);
  const matchOrder =
    orders.find(
      (order) => order.userId === currentUserId && order.isOrdered === false
    ) || {};

  useEffect(() => {
    localStorage.setItem('orderitems', JSON.stringify(guestCart));
  }, [guestCart]);

  //-------------------Guest to Login Cart Functionality---------------------//

  const guestToUserCart =
    guestCart.map((guestItem) => {
      const item = {
        ...guestItem,
        orderId: matchOrder.id,
        userId: currentUserId,
      };
      return item;
    }) || [];

  useEffect(() => {
    if (currentUserId) {
      guestToUserCart.forEach((guestCartItem) => {
        const itemFound = orderItems.find(
          (orderItem) => orderItem.id === guestCartItem.id
        );

        if (!itemFound) {
          dispatch(addOrderItem(guestCartItem));
        }
      });
    }
  }, []);

  //-------------------Adding to Cart Functionality---------------------//
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="sp">
      {injectStyle()}
      <div className="sp-left">
        <div className="sp-left-img">
          <img className="sp-img" src={singleProduct.img} />
        </div>
        <div>Back to Products</div>
      </div>
      <div className="sp-right">
        <div className="sp-right-wrap">
          <div className="sp-desc">
            <div className="sp-desc-name">
              <h2>
                {singleProduct.brand} - {singleProduct.model}
              </h2>
            </div>
            <h3>{singleProduct.category} </h3>
            <p>{singleProduct.description}</p>
            <div className="sp-desc-price">
              <h3>${singleProduct.price}</h3>
            </div>
          </div>
          <div className="sp-buttons">
            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
            >
              -
            </button>
            <div className="sp-quantity">{quantity}</div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity === 10}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              {
                notify();
              }
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
                        quantity: guestOrderItem.quantity + quantity,
                      })
                    )
                  : dispatch(
                      addGuestOrderItem({
                        productId: singleProduct.id,
                        userId: null,
                        id: uuidv4(),
                        quantity: quantity,
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
                        quantity: orderItem.quantity + quantity,
                        userId: currentUserId,
                      })
                    )
                  : dispatch(
                      addOrderItem({
                        productId: singleProduct.id,
                        orderId: matchOrder.id,
                        userId: currentUserId,
                        quantity: quantity,
                      })
                    );
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
