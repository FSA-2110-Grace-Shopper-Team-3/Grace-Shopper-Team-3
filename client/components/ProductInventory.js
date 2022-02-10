import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductInventory = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.category} - {product.brand} - {product.model}
        </div>
      ))}
    </div>
  );
};

export default ProductInventory;
