import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const product =
    useSelector((state) =>
      state.products.find((product) => product.id === id)
    ) || {};

  return (
    <div className="single-prod">
      <ul>
        <li>
          <img className="prod-img" src={product.img} />
        </li>
        <li>Brand: {product.brand}</li>
        <li>Model: {product.model}</li>
        <li>Price: ${product.price}</li>
        <li>Description: {product.description}</li>
        <li>Category: {product.category}</li>
      </ul>
    </div>
  );
};

export default EditProduct;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';

// import {
//   addOrderItem,
//   editOrderItem,
//   addGuestOrderItem,
//   editGuestOrderItem,
// } from '../store';
// import { v4 as uuidv4 } from 'uuid';
// import { useEffect } from 'react';

// const product = () => {
//   const { id } = useParams();
//   const currentUserId = useSelector((state) => state.auth.id) || '';
//   const product =
//     useSelector((state) =>
//       state.products.find((product) => product.id === id)
//     ) || {};

//   const orders = useSelector((state) => state.orders);
//   const orderItems = useSelector((state) => state.orderItems);

//   const guestCart = useSelector((state) => state.guestOrderItems);
//   const matchOrder =
//     orders.find(
//       (order) => order.userId === currentUserId && order.isOrdered === false
//     ) || {};

//   useEffect(() => {
//     localStorage.setItem('orderitems', JSON.stringify(guestCart));
//   }, [guestCart]);

//   //-------------------Guest to Login Cart Functionality---------------------//

//   const guestToUserCart =
//     guestCart.map((guestItem) => {
//       const item = {
//         ...guestItem,
//         orderId: matchOrder.id,
//         userId: currentUserId,
//       };
//       return item;
//     }) || [];

//   useEffect(() => {
//     if (currentUserId) {
//       guestToUserCart.forEach((guestCartItem) => {
//         const itemFound = orderItems.find(
//           (orderItem) => orderItem.id === guestCartItem.id
//         );

//         if (!itemFound) {
//           dispatch(addOrderItem(guestCartItem));
//         }
//       });
//     }
//   }, []);

//   const dispatch = useDispatch();

//   return (
//     <div className="single-prod">
//       <ul>
//         <li>
//           <img className="prod-img" src={product.img} />
//         </li>
//         <li>Brand: {product.brand}</li>
//         <li>Model: {product.model}</li>
//         <li>Price: ${product.price}</li>
//         <li>Description: {product.description}</li>
//         {/* <li>{product.category}</li> BACKEND ONLY? */}
//       </ul>
//       <button
//         onClick={() => {
//           if (!currentUserId) {
//             const guestOrderItem = guestCart.find(
//               (orderItem) =>
//                 orderItem.productId === product.id &&
//                 orderItem.userId === null
//             );
//             guestOrderItem
//               ? dispatch(
//                   editGuestOrderItem({
//                     ...guestOrderItem,
//                     id: guestOrderItem.id,
//                     quantity: guestOrderItem.quantity + 1,
//                   })
//                 )
//               : dispatch(
//                   addGuestOrderItem({
//                     productId: product.id,
//                     userId: null,
//                     id: uuidv4(),
//                     quantity: 1,
//                   })
//                 );
//           } else {
//             const orderItem = orderItems.find(
//               (orderItem) =>
//                 orderItem.productId === product.id &&
//                 orderItem.orderId === matchOrder.id
//             );
//             orderItem
//               ? dispatch(
//                   editOrderItem({
//                     id: orderItem.id,
//                     quantity: orderItem.quantity + 1,
//                     userId: currentUserId,
//                   })
//                 )
//               : dispatch(
//                   addOrderItem({
//                     productId: product.id,
//                     orderId: matchOrder.id,
//                     userId: currentUserId,
//                   })
//                 );
//           }
//         }}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default product;
