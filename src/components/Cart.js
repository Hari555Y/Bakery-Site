import React, { useState } from 'react';
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const deleteFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== product));
  };

  const handleCheckout = () => {
    
    console.log('Cart items:', cartItems);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
