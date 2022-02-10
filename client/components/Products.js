import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { addOrderItem, editOrderItem } from '../store';

const Products = () => {
  const username = useSelector((state) => state.auth.username);
  let products = useSelector((state) => state.products);
  const orderItems = useSelector((state) => state.orderItems);

  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.id);

  const orders = useSelector((state) => state.orders);
  const matchOrder = orders.find(
    (order) => order.userId === id && order.isOrdered === false
  );
  const match = useRouteMatch();

  if (match.params.sortBy) {
    const field = match.params.sortBy;
    products = [...products].sort((a, b) => {
      if (field === 'lowtohighprice') {
        return a.price - b.price;
      }
      if (field === 'hightolowprice') {
        return b.price - a.price;
      }
      return a[field].localeCompare(b[field]);
    });
  }
  return (
    <div>
      <div>
        <h3>Welcome, {username ? username : 'Guest!'}</h3>
        <div className="sortinglinks">
          <Link to={`/products/sort/brand`}>sort by brand </Link>
          <Link to={`/products/sort/model`}>sort by model</Link>
          <Link to={`/products/sort/lowtohighprice`}>
            sort by price low to high
          </Link>
          <Link to={`/products/sort/hightolowprice`}>sort by high to low</Link>
        </div>
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
