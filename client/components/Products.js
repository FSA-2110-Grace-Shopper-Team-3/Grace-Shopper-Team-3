import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOrderProd } from '../store';

const Products = () => {
  const username = useSelector((state) => state.auth.username);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.id);

  const orders = useSelector((state) => state.orders);
  const matchOrder = orders.find((order) => order.userId === id);
  return (
    <div>
      <div>
        <h3>Welcome, {username}</h3>
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
              onClick={() =>
                dispatch(
                  addOrderProd({
                    productId: product.id,
                    orderId: matchOrder.id,
                  })
                )
              }
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
