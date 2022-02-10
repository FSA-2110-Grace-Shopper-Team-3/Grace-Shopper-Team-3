import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOrderItem, editOrderItem } from '../store';

const Products = () => {
  const username = useSelector((state) => state.auth.username);
  const products = useSelector((state) => state.products);
  const orderItems = useSelector((state) => state.orderItems);

  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.id);

  const orders = useSelector((state) => state.orders);
  const matchOrder = orders.find(
    (order) => order.userId === id && order.isOrdered === false
  );

  return (
    <div>
      <div>
        <h3>Welcome, {username ? username : 'Guest!'}</h3>
      </div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            {
              <Link to={`/products/${product.id}`}>
                {product.category} - {product.brand} - {product.model}
              </Link>
            }
            <button
              onClick={() => {
                const orderItem = orderItems.find(
                  (orderItem) =>
                    orderItem.productId === product.id &&
                    orderItem.orderId === matchOrder.id
                );
                orderItem
                  ? dispatch(
                      editOrderItem({
                        id: orderItem.id,
                        quantity: orderItem.quantity + 1,
                        userId: id,
                      })
                    )
                  : dispatch(
                      addOrderItem({
                        productId: product.id,
                        orderId: matchOrder.id,
                        userId: id,
                      })
                    );
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
