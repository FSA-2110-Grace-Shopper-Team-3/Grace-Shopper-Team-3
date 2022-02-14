import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import AddProduct from './AddProduct';
import { deleteProd } from '../store';

const ProductInventory = () => {
  let products = useSelector((state) => state.products);
  const match = useRouteMatch();
  const dispatch = useDispatch();

  if (match.params.sortBy) {
    const field = match.params.sortBy;
    if (field === 'guitars') {
      products = [...products].filter(
        (product) => product.category === 'Guitar'
      );
    } else if (field === 'drums') {
      products = [...products].filter((product) => product.category === 'Drum');
    } else if (field === 'cellos') {
      products = [...products].filter(
        (product) => product.category === 'Cello'
      );
    } else if (field === 'accesories') {
      products = [...products].filter(
        (product) => product.category === 'Accesory'
      );
    } else if (field === 'pianos') {
      products = [...products].filter(
        (product) => product.category === 'Piano'
      );
    } else {
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
  }
  return (
    <div>
      <div className="sortinglinks">
        <Link to={`/admin/inventory/sort/guitars`}>Guitars </Link>
        <Link to={`/admin/inventory/sort/drums`}>Drums </Link>
        <Link to={`/admin/inventory/sort/cellos`}>Cellos </Link>
        <Link to={`/admin/inventory/sort/pianos`}>Pianos </Link>
        <Link to={`/admin/inventory/sort/accesories`}>Accesories </Link>
        <Link to={`/admin/inventory/sort/brand`}>sort by brand </Link>
        <Link to={`/admin/inventory/sort/model`}>sort by model</Link>
        <Link to={`/admin/inventory/sort/lowtohighprice`}>
          sort by price low to high
        </Link>
        <Link to={`/admin/inventory/sort/hightolowprice`}>
          sort by high to low
        </Link>
      </div>
      <div className="inventory">
        {products.map((product) => (
          <div key={product.id}>
            <button onClick={() => dispatch(deleteProd(product.id))}>x</button>
            <Link to={`/admin/inventory/${product.id}`}>
              {product.category} - {product.brand} - {product.model} - Price: $
              {product.price}
            </Link>
          </div>
        ))}
        <AddProduct />
      </div>
    </div>
  );
};

export default ProductInventory;
