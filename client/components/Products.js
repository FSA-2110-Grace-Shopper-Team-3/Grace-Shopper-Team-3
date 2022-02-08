import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOrderProd } from '../store';

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
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
                    orderId: '6e638e7c-cffb-480f-8f6e-64ac2d4e2cf0',
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
