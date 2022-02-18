import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import AddProduct from './AddProduct';
import { deleteProd } from '../store';
import { Button } from '@material-ui/core';

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
        (product) => product.category === 'Accessory'
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
      <div>
        <AddProduct />
      </div>
      <div className="pds">
        <div className="pds-filter">
          <h2>PRODUCTS</h2>
        </div>
        <div>
          <div className="pds-list">
            {products.map((product) => {
              return (
                <div key={product.id} className="pds-product">
                  {
                    <div className="pds-product-wrapper">
                      <Link to={`/admin/inventory/${product.id}`}>
                        <div>
                          <img src={product.img} />
                        </div>
                        <div className="pds-product-name">
                          <div>{product.category}</div>
                          <div>
                            {product.brand} {product.model}
                          </div>
                          <div>Quantity:{product.quantity}</div>
                          <div>Price: ${product.price}</div>
                        </div>
                      </Link>
                    </div>
                  }
                  <button onClick={() => dispatch(deleteProd(product.id))}>
                    delete product
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInventory;
