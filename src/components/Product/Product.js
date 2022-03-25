import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
      <button className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
