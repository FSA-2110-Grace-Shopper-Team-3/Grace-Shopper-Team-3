import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';

const ProductInventory = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="inventory">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/admin/inventory/${product.id}`}>
            {product.category} - {product.brand} - {product.model} - Price: $
            {product.price}
          </Link>
        </div>
      ))}
      <AddProduct />
    </div>
  );
};

export default ProductInventory;
