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
                    orderId: '45eadede-ed48-4971-91e6-e1056f357778',
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
