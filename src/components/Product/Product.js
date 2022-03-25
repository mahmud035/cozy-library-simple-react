import React from 'react';
import './Product.css';

const Product = (props) => {
  const { id, name, price, picture } = props.product;

  return (
    <div className="product">
      <img src={picture} alt="" />
      <div className="product-info">
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
      </div>
    </div>
  );
};

export default Product;
