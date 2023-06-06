import React from 'react';

const Product = ({ description, addToCart, deleteFromCart }) => {
  return (
    <div>
      <p>{description}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={deleteFromCart}>Delete from Cart</button>
    </div>
  );
};

export default Product;