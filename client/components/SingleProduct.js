import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const singleProduct =
    useSelector((state) =>
      state.products.find((product) => product.id === id * 1)
    ) || {};

  return (
    <div>
      <ul>
        <li>{singleProduct.brand}</li>
        <li>{singleProduct.model}</li>
        <li>{singleProduct.price}</li>
        <li>{singleProduct.description}</li>
        <li>{singleProduct.category}</li>
      </ul>
    </div>
  );
};

export default SingleProduct;
