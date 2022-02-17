import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteOrderItem,
  editOrderItem,
  addOrder,
  editOrder,
  deleteGuestOrderItem,
  editGuestOrderItem,
} from '../store';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

// const Cart = () => {
//   const orderItems = useSelector((state) => state.orderItems);
//   const products = useSelector((state) => state.products);
//   const userId = useSelector((state) => state.auth.id);

//   const matchingOrder =
//     useSelector((state) =>
//       state.orders.find(
//         (order) => order.userId === userId && order.isOrdered === false
//       )
//     ) || {};

//   const matchingOrderItems = orderItems.filter(
//     (orderItem) => orderItem.orderId === matchingOrder.id
//   );

//   const userCartPriceTotal = matchingOrderItems.reduce((acc, curr) => {
//     const currentProduct =
//       products.find((product) => product.id === curr.productId) || {};
//     acc += currentProduct.price * curr.quantity;
//     return acc;
//   }, 0);

//   const dispatch = useDispatch();
//   const history = useHistory();

//   //-------------------Guest Cart Functionality---------------------//

//   const guestCart = useSelector((state) => state.guestOrderItems);

//   const guestCartPriceTotal = guestCart.reduce((acc, curr) => {
//     const currentProduct =
//       products.find((product) => product.id === curr.productId) || {};
//     acc += currentProduct.price * curr.quantity;
//     return acc;
//   }, 0);

//   useEffect(() => {
//     localStorage.setItem('orderitems', JSON.stringify(guestCart));
//   }, [guestCart]);

//   //-------------------Checkout Functionality---------------------//

//   const lineItems = matchingOrderItems.map((orderItem) => {
//     const currentProduct =
//       products.find((product) => product.id === orderItem.productId) || {};
//     return {
//       name: `${currentProduct.brand} - ${currentProduct.model}`,
//       amount: currentProduct.price * 100,
//       currency: 'usd',
//       quantity: orderItem.quantity,
//     };
//   });

//   const handleCheckout = async (ev) => {
//     ev.preventDefault();
//     const data = {
//       line_items: lineItems,
//       mode: 'payment',
//       success_url: `http://localhost:8080/orderplaced/?success=true`,
//       cancel_url: `http://localhost:8080/cart/?cancelled=true`,
//     };
//     const response = await axios.post('/api/create-checkout-session', data);
//     window.location = response.data.url;
//   };

//   return (
//     <div>
//       <ul>
//         {!userId ? (
//           <div>
//             {guestCart.map((orderItem) => {
//               const cartItem =
//                 products.find(
//                   (product) => product.id === orderItem.productId
//                 ) || {};
//               return (
//                 <li key={orderItem.id}>
//                   <button
//                     onClick={() => dispatch(deleteGuestOrderItem(orderItem.id))}
//                   >
//                     x
//                   </button>
//                   <Link to={`/products/${orderItem.productId}`}>
//                     {cartItem.brand} - {cartItem.model}
//                   </Link>{' '}
//                   Quantity:{orderItem.quantity}
//                   <button
//                     onClick={() =>
//                       dispatch(
//                         editGuestOrderItem({
//                           ...orderItem,
//                           quantity: orderItem.quantity + 1,
//                         })
//                       )
//                     }
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() =>
//                       dispatch(
//                         editGuestOrderItem({
//                           ...orderItem,
//                           quantity: orderItem.quantity - 1,
//                         })
//                       )
//                     }
//                     disabled={orderItem.quantity === 1}
//                   >
//                     -
//                   </button>
//                 </li>
//               );
//             })}
//             <h2>Total Price: ${guestCartPriceTotal.toFixed(2)}</h2>
//           </div>
//         ) : (
//           <div>
//             {matchingOrderItems.map((orderItem) => {
//               const cartItem =
//                 products.find(
//                   (product) => product.id === orderItem.productId
//                 ) || {};
//               return (
//                 <li key={orderItem.id}>
//                   <button
//                     onClick={() => dispatch(deleteOrderItem(orderItem.id))}
//                   >
//                     x
//                   </button>
//                   <Link to={`/products/${orderItem.productId}`}>
//                     {cartItem.brand} - {cartItem.model}
//                   </Link>{' '}
//                   Quantity:{orderItem.quantity}
//                   <button
//                     onClick={() =>
//                       dispatch(
//                         editOrderItem({
//                           id: orderItem.id,
//                           quantity: orderItem.quantity + 1,
//                         })
//                       )
//                     }
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() =>
//                       dispatch(
//                         editOrderItem({
//                           id: orderItem.id,
//                           quantity: orderItem.quantity - 1,
//                         })
//                       )
//                     }
//                     disabled={orderItem.quantity === 1}
//                   >
//                     -
//                   </button>
//                 </li>
//               );
//             })}
//             <h2>Total Price: ${userCartPriceTotal.toFixed(2)}</h2>
//           </div>
//         )}
//       </ul>
//       <button type="submit" onClick={handleCheckout}>
//         Checkout
//       </button>
//       <Link to="/orderhistory">View Order History</Link>
//     </div>
//   );
// };

const Cart = ({ cartOpen, handleClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const orderItems = useSelector((state) => state.orderItems);
  const products = useSelector((state) => state.products);
  const userId = useSelector((state) => state.auth.id);

  const matchingOrder =
    useSelector((state) =>
      state.orders.find(
        (order) => order.userId === userId && order.isOrdered === false
      )
    ) || {};

  const matchingOrderItems = orderItems.filter(
    (orderItem) => orderItem.orderId === matchingOrder.id
  );

  const userCartPriceTotal = matchingOrderItems.reduce((acc, curr) => {
    const currentProduct =
      products.find((product) => product.id === curr.productId) || {};
    acc += currentProduct.price * curr.quantity;
    return acc;
  }, 0);

  //-------------------Guest Cart Functionality---------------------//

  const guestCart = useSelector((state) => state.guestOrderItems);

  const guestCartPriceTotal = guestCart.reduce((acc, curr) => {
    const currentProduct =
      products.find((product) => product.id === curr.productId) || {};
    acc += currentProduct.price * curr.quantity;
    return acc;
  }, 0);

  useEffect(() => {
    localStorage.setItem('orderitems', JSON.stringify(guestCart));
  }, [guestCart]);

  //-------------------Checkout Functionality---------------------//

  const lineItems = matchingOrderItems.map((orderItem) => {
    const currentProduct =
      products.find((product) => product.id === orderItem.productId) || {};
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
      success_url: `http://localhost:8080/orderplaced/?success=true`,
      cancel_url: `http://localhost:8080/cart/?cancelled=true`,
    };
    const response = await axios.post('/api/create-checkout-session', data);
    window.location = response.data.url;
  };

  //-------------------Cart Drawer Functionality---------------------//
  const [isCartOpen, setIsCartOpen] = useState(cartOpen);

  useEffect(() => {
    setIsCartOpen(cartOpen);
  }, [cartOpen]);

  return (
    <div>
      <ul>
        {!userId ? (
          !guestCart.length ? (
            <Drawer
              anchor="right"
              open={isCartOpen}
              onClose={() => {
                setIsCartOpen(false);
                handleClose();
              }}
            >
              <h1>Your Cart is Empty</h1>
              <h2>Total Price: ${guestCartPriceTotal.toFixed(2)}</h2>
              <button type="submit" onClick={handleCheckout}>
                Checkout
              </button>
            </Drawer>
          ) : (
            <Drawer
              anchor="right"
              open={isCartOpen}
              onClose={() => {
                setIsCartOpen(false);
                handleClose();
              }}
            >
              <div className="gc">
                {guestCart.map((orderItem) => {
                  const cartItem =
                    products.find(
                      (product) => product.id === orderItem.productId
                    ) || {};
                  return (
                    <li key={orderItem.id}>
                      <button
                        onClick={() =>
                          dispatch(deleteGuestOrderItem(orderItem.id))
                        }
                      >
                        x
                      </button>
                      <Link to={`/products/${orderItem.productId}`}>
                        {cartItem.brand} - {cartItem.model}
                      </Link>{' '}
                      Quantity:{orderItem.quantity}
                      <button
                        onClick={() =>
                          dispatch(
                            editGuestOrderItem({
                              ...orderItem,
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
                            editGuestOrderItem({
                              ...orderItem,
                              quantity: orderItem.quantity - 1,
                            })
                          )
                        }
                        disabled={orderItem.quantity === 1}
                      >
                        -
                      </button>
                    </li>
                  );
                })}
                <h2>Total Price: ${guestCartPriceTotal.toFixed(2)}</h2>
              </div>
              <button type="submit" onClick={handleCheckout}>
                Checkout
              </button>
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
          >
            <h1>Your Cart is Empty</h1>
            <h2>Total Price: ${userCartPriceTotal.toFixed(2)}</h2>
            <button type="submit" onClick={handleCheckout}>
              Checkout
            </button>
          </Drawer>
        ) : (
          <Drawer
            anchor="right"
            open={isCartOpen}
            onClose={() => {
              setIsCartOpen(false);
              handleClose();
            }}
          >
            <div className="uc">
              {matchingOrderItems.map((orderItem) => {
                const cartItem =
                  products.find(
                    (product) => product.id === orderItem.productId
                  ) || {};
                return (
                  <li key={orderItem.id}>
                    <button
                      onClick={() => dispatch(deleteOrderItem(orderItem.id))}
                    >
                      x
                    </button>
                    <Link to={`/products/${orderItem.productId}`}>
                      {cartItem.brand} - {cartItem.model}
                    </Link>{' '}
                    Quantity:{orderItem.quantity}
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
                    </button>
                  </li>
                );
              })}
              <h2>Total Price: ${userCartPriceTotal.toFixed(2)}</h2>
            </div>
            <button type="submit" onClick={handleCheckout}>
              Checkout
            </button>
          </Drawer>
        )}
      </ul>
    </div>
  );
};

export default Cart;
