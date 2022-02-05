import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Products = () => {

  const products = useSelector((state) => state.products);

  return (
    <div>
      {
        products.map((product) => {
          return (
            <div key={product.id}>
              {
                <Link to={`/products/${product.id}`}>{product.brand}</Link>
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Products