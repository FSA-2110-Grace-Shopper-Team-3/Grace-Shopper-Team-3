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
import { useEffect } from 'react';

const SingleProduct = () => {
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

  const dispatch = useDispatch();

  return (
    <div className="sp">
      <div className="sp-left">
        <div>
          <img className="sp-img" src={singleProduct.img} />
        </div>
      </div>
      <div className="sp-right">
        <div className="sp-right-wrap">
          <div className="sp-desc">
            {/* <ul>
              <li></li>
              <li>Brand: {singleProduct.brand}</li>
              <li>Model: {singleProduct.model}</li>
              <li>Price: ${singleProduct.price}</li>
              <li>Description: {singleProduct.description}</li>
            </ul> */}
            <h1>
              {singleProduct.brand} - {singleProduct.model}
            </h1>
            <h3>{singleProduct.category} </h3>

            <p>{singleProduct.description}</p>
            <h4>${singleProduct.price}</h4>
          </div>
          {/* Quantity:{orderItem.quantity}
          <button
            onClick={() =>
              dispatch(
                editOrderItem({
                  id: orderItem.id,
                  quantity: orderItem.quantity + 1,
                })
              )
            }
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch(
                editOrderItem({
                  id: orderItem.id,
                  quantity: orderItem.quantity - 1,
                })
              )
            }
            disabled={orderItem.quantity === 1}
          >
            -
          </button> */}
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
      </div>
    </div>
  );
};

export default SingleProduct;
