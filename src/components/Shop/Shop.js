import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const removeFromCart = (cart) => {
    const newCart = [];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>Selected Books: {cart.length}</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.picture} alt="" />
            <h3>{item.name}</h3>
          </div>
        ))}
        <div className="cart-btn-container">
          <button className="cart-btn">Choose 1 For Me</button>
          <button onClick={() => removeFromCart(cart)} className="cart-btn">
            Choose Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
