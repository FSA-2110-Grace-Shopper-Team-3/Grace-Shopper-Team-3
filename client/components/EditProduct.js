import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === id)
  );

  return (
    <div>
      info for {product.brand} - {product.model}
    </div>
  );
};

export default EditProduct;
