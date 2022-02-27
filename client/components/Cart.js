import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrderItem, editOrderItem, deleteGuestOrderItem, editGuestOrderItem } from '../store';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Drawer from '@mui/material/Drawer';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

const Cart = ({ cartOpen, handleClose }) => {
  //-------------------Toast Message Functionality---------------------//
  const notify = () => toast.error('removed from cart');

  const signUptoOrder = () =>
    toast.error(
      'Please login or create an account to place an order with UNPLGD',
      {
        autoClose: 2000,
        limit: 1,
      }
    );

  //-------------------Matching Order Items and Cart Total---------------------//
  const dispatch = useDispatch();
  const history = useHistory();
  const orderItems = useSelector((state) => state.orderItems);
  const products = useSelector((state) => state.products);
  const userId = useSelector((state) => state.auth.id);
  const matchingOrder = useSelector((state) => state.orders.find((order) => order.userId === userId && order.isOrdered === false)) || {};
  const matchingOrderItems = orderItems.filter((orderItem) => orderItem.orderId === matchingOrder.id);

  const userCartPriceTotal = matchingOrderItems.reduce((acc, curr) => {
    const currentProduct = products.find((product) => product.id === curr.productId) || {};
    acc += currentProduct.price * curr.quantity;
    return acc;
  }, 0);

  //-------------------Guest Cart Functionality---------------------//

  const guestCart = useSelector((state) => state.guestOrderItems);

  const guestCartPriceTotal = guestCart.reduce((acc, curr) => {
    const currentProduct = products.find((product) => product.id === curr.productId) || {};
    acc += currentProduct.price * curr.quantity;
    return acc;
  }, 0);

  useEffect(() => {
    localStorage.setItem('orderitems', JSON.stringify(guestCart));
  }, [guestCart]);

  //-------------------Checkout Functionality---------------------//

  const lineItems = matchingOrderItems.map((orderItem) => {
    const currentProduct = products.find((product) => product.id === orderItem.productId) || {};
    return {
      name: `${currentProduct.brand} - ${currentProduct.model}`,
      amount: currentProduct.price * 100,
      currency: 'usd',
      quantity: orderItem.quantity,
    };
  });

  const handleCheckout = async (ev) => {
    ev.preventDefault();
    const data = {
      line_items: lineItems,
      mode: 'payment',
      success_url: `https://graceshopper-unplgd.herokuapp.com/orderplaced/?success=true`,
      cancel_url: `https://graceshopper-unplgd.herokuapp.com/products`,
    };
    const response = await axios.post('/api/create-checkout-session', data);
    window.location = response.data.url;
  };

  //-------------------Cart Drawer Functionality---------------------//
  const [isCartOpen, setIsCartOpen] = useState(cartOpen);

  useEffect(() => {
    setIsCartOpen(cartOpen);
  }, [cartOpen]);

  //-------------------Spinner Loading Functionality---------------------//
  const [loading, setLoading] = useState(false);

  return (
    <div className="ct">
      {injectStyle()}
      {!userId ? (
        !guestCart.length ? (
          <Drawer
            anchor="right"
            open={isCartOpen}
            onClose={() => {
              setIsCartOpen(false);
              handleClose();
            }}
            className="ct-drawer"
          >
            <div className="ct-uc-header">
              <h3>GUEST CART</h3>
            </div>
            <div className="ct-uc-empty">
              <h3>GUEST CART IS EMPTY</h3>
            </div>
            <div className="ct-checkout">
              <h3>SUBTOTAL ${guestCartPriceTotal.toFixed(2)}</h3>
              <div className="ct-checkout-p">
                <p>
                  You can also apply any discounts or promotional codes during
                  the checkout process.
                </p>
              </div>
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
                  fontSize: '1rem',
                }}
                endIcon={<AddShoppingCartIcon />}
                onClick={() => signUptoOrder()}
              >
                TO CHECKOUT
              </Button>
            </div>
          </Drawer>
        ) : (
          <Drawer
            sx={{ width: 1000 }}
            anchor="right"
            open={isCartOpen}
            onClose={() => {
              setIsCartOpen(false);
              handleClose();
            }}
            className="ct-drawer"
          >
            <div className="ct-uc">
              <div className="ct-uc-header">
                <h3>GUEST CART</h3>
              </div>
              <div className="ct-uc-items">
                {guestCart.map((orderItem, idx) => {
                  const cartItem =
                    products.find(
                      (product) => product.id === orderItem.productId
                    ) || {};
                  return (
                    <div
                      className="ct-uc-item"
                      key={orderItem.id}
                      style={{
                        paddingBottom: idx === guestCart.length - 1 ? 180 : 0,
                      }}
                    >
                      <div className="ct-uc-item-img">
                        <img src={cartItem.img} />
                      </div>
                      <div className="ct-uc-item-desc">
                        <Link
                          className="react-link-ct"
                          to={`/products/${orderItem.productId}`}
                        >
                          <h4>{cartItem.model}</h4>
                        </Link>
                        <div className="ct-uc-item-brand">
                          {cartItem.brand} - {cartItem.category}
                        </div>
                        <div className="ct-uc-item-qty-wrap">
                          <div className="ct-uc-item-price">
                            ${(orderItem.quantity * cartItem.price).toFixed(2)}
                          </div>
                          <div className="ct-uc-item-qty">
                            QTY:
                            <div className="ct-quantity">
                              {orderItem.quantity}
                            </div>
                            <div className="ct-uc-arrows">
                              <IconButton
                                disableRipple
                                disabled={
                                  cartItem.quantity === orderItem.quantity
                                    ? true
                                    : false
                                }
                                onClick={() =>
                                  dispatch(
                                    editGuestOrderItem({
                                      ...orderItem,
                                      id: orderItem.id,
                                      quantity: orderItem.quantity + 1,
                                    })
                                  )
                                }
                              >
                                <KeyboardArrowUpIcon
                                  style={{ cursor: 'pointer' }}
                                />
                              </IconButton>
                              <IconButton
                                disabled={orderItem.quantity === 1}
                                disableRipple
                                onClick={() =>
                                  dispatch(
                                    editGuestOrderItem({
                                      ...orderItem,
                                      id: orderItem.id,
                                      quantity: orderItem.quantity - 1,
                                    })
                                  )
                                }
                              >
                                <KeyboardArrowDownIcon
                                  style={{ cursor: 'pointer' }}
                                />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ct-uc-item-del">
                        <HighlightOffTwoToneIcon
                          style={{ color: 'red' }}
                          onClick={() => {
                            {
                              notify();
                            }
                            dispatch(deleteGuestOrderItem(orderItem.id));
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="ct-checkout">
              <div className="ct-checkout-total">
                <h3>SUBTOTAL ${guestCartPriceTotal.toFixed(2)}</h3>
              </div>
              <div className="ct-checkout-p">
                <p>
                  You can also apply any discounts or promotional codes during
                  the checkout process.
                </p>
              </div>
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
                  fontSize: '1rem',
                }}
                endIcon={<AddShoppingCartIcon />}
                onClick={() => signUptoOrder()}
              >
                TO CHECKOUT
              </Button>
            </div>
          </Drawer>
        )
      ) : !matchingOrderItems.length ? (
        <Drawer
          anchor="right"
          open={isCartOpen}
          onClose={() => {
            setIsCartOpen(false);
            handleClose();
          }}
          className="ct-drawer"
        >
          <div className="ct-uc-header">
            <h3>YOUR CART</h3>
          </div>
          <div className="ct-uc-empty">
            <h3>YOUR CART IS EMPTY</h3>
          </div>
          <div className="ct-checkout">
            <h3>SUBTOTAL ${userCartPriceTotal.toFixed(2)}</h3>
            <div className="ct-checkout-p">
              <p>
                You can also apply any discounts or promotional codes during the
                checkout process.
              </p>
            </div>
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
                fontSize: '1rem',
              }}
              endIcon={<AddShoppingCartIcon />}
              onClick={handleCheckout}
            >
              TO CHECKOUT
            </Button>
          </div>
        </Drawer>
      ) : (
        <Drawer
          sx={{ width: 1000 }}
          anchor="right"
          open={isCartOpen}
          onClose={() => {
            setIsCartOpen(false);
            handleClose();
          }}
          className="ct-drawer"
        >
          <div className="ct-uc">
            <div className="ct-uc-header">
              <h3>YOUR CART</h3>
            </div>
            <div className="ct-uc-items">
              {matchingOrderItems.map((orderItem, idx) => {
                const cartItem =
                  products.find(
                    (product) => product.id === orderItem.productId
                  ) || {};
                return (
                  <div
                    className="ct-uc-item"
                    key={orderItem.id}
                    style={{
                      paddingBottom:
                        idx === matchingOrderItems.length - 1 ? 180 : 0,
                    }}
                  >
                    <div className="ct-uc-item-img">
                      <img src={cartItem.img} />
                    </div>
                    <div className="ct-uc-item-desc">
                      <Link
                        className="react-link-ct"
                        to={`/products/${orderItem.productId}`}
                      >
                        <h4>{cartItem.model}</h4>
                      </Link>
                      <div className="ct-uc-item-brand">
                        {cartItem.brand} - {cartItem.category}
                      </div>
                      <div className="ct-uc-item-qty-wrap">
                        <div className="ct-uc-item-price">
                          ${(orderItem.quantity * cartItem.price).toFixed(2)}
                        </div>
                        <div className="ct-uc-item-qty">
                          QTY:
                          <div className="ct-quantity">
                            {orderItem.quantity}
                          </div>
                          <div className="ct-uc-arrows">
                            <IconButton
                              disableRipple
                              disabled={
                                cartItem.quantity === orderItem.quantity
                                  ? true
                                  : false
                              }
                              onClick={() =>
                                dispatch(
                                  editOrderItem({
                                    id: orderItem.id,
                                    quantity: orderItem.quantity + 1,
                                  })
                                )
                              }
                            >
                              <KeyboardArrowUpIcon
                                style={{ cursor: 'pointer' }}
                              />
                            </IconButton>
                            <IconButton
                              disabled={orderItem.quantity === 1}
                              disableRipple
                              onClick={() =>
                                dispatch(
                                  editOrderItem({
                                    id: orderItem.id,
                                    quantity: orderItem.quantity - 1,
                                  })
                                )
                              }
                            >
                              <KeyboardArrowDownIcon
                                style={{ cursor: 'pointer' }}
                              />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ct-uc-item-del">
                      <HighlightOffTwoToneIcon
                        style={{ color: 'red' }}
                        onClick={() => {
                          {
                            notify();
                          }
                          dispatch(deleteOrderItem(orderItem.id));
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="ct-checkout">
            <div className="ct-checkout-total">
              <h3>SUBTOTAL ${userCartPriceTotal.toFixed(2)}</h3>
            </div>
            <div className="ct-checkout-p">
              <p>
                You can also apply any discounts or promotional codes during the
                checkout process.
              </p>
            </div>
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
                fontSize: '1rem',
              }}
              endIcon={<AddShoppingCartIcon />}
              onClick={handleCheckout}
            >
              TO CHECKOUT
            </Button>
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default Cart;
