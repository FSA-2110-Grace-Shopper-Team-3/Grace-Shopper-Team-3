import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const singleProduct =
    useSelector((state) =>
      state.products.find((product) => product.id === id)
    ) || {};

  return (
    <div className="single-prod">
      <ul>
        <li>
          <img className="prod-img" src={singleProduct.img} />
        </li>
        <li>Brand: {singleProduct.brand}</li>
        <li>Model: {singleProduct.model}</li>
        <li>Price: ${singleProduct.price}</li>
        <li>Description: {singleProduct.description}</li>
        {/* <li>{singleProduct.category}</li> BACKEND ONLY? */}
      </ul>
    </div>
  );
};

export default SingleProduct;
