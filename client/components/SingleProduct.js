import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
  addOrderItem,
  editOrderItem,
  addGuestOrderItem,
  editGuestOrderItem,
} from '../store';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@mui/material/Button';
import Rating from '@material-ui/lab/Rating';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

const SingleProduct = () => {
  const toastId = React.useRef(null);
  const notify = () => (toastId.current = toast.success('added to cart!'));

  const updateToast = () =>
    toast.update(toastId.current, {
      type: toast.TYPE.INFO,
      render: 'you have reached the stock limit for this item',
      autoClose: 5000,
    });

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const currentUserId = useSelector((state) => state.auth.id) || '';
  const singleProduct =
    useSelector((state) =>
      state.products.find((product) => product.id === id)
    ) || {};

  const orders = useSelector((state) => state.orders);
  const orderItems = useSelector((state) => state.orderItems);
  const singleProductRating = singleProduct.rating || 0;

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
            <Rating
              name="disabled"
              value={singleProductRating}
              disabled
              className="sp-rating"
            />
            <div className="sp-desc-price">
              <h3>${singleProduct.price}</h3>
            </div>
            <div className="sp-buttons">
              <span>QTY:</span>
              <IconButton
                style={{ color: 'black' }}
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1 || singleProduct.quantity === 0}
              >
                <RemoveIcon />
              </IconButton>
              <div className="sp-quantity">{quantity}</div>
              <IconButton
                style={{ color: 'black' }}
                onClick={() => setQuantity(quantity + 1)}

                disabled={
                  quantity === singleProduct.quantity ||
                  singleProduct.quantity === 0
                }

              >
                <AddIcon />
              </IconButton>
            </div>
            <div className="sp-other-btns">
              <Button
                variant="contained"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: '#00ADB5',
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: '#00ADB5',
                  },
                  width: 230,
                  height: 60,
                  fontSize: '1.2rem',
                }}
                endIcon={
                  <AddShoppingCartIcon
                    style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
                  />
                }
                disabled={singleProduct.quantity === 0 ? true : false}
                onClick={() => {
                  notify();
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
                {singleProduct.quantity === 0 ? 'OUT OF STOCK' : 'ADD TO CART'}
              </Button>
              <Button
                variant="text"
                disableRipple
                sx={{
                  color: 'black',
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                  width: 250,
                  height: 70,
                  fontSize: '1rem',
                  padding: 0,
                  justifyContent: 'flex-start',
                }}
                startIcon={<ArrowBackIcon />}
                onClick={() => history.push('/products')}
              >
                BACK TO PRODUCTS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
