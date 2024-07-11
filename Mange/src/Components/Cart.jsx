import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button>Remove</button> {/* Implement remove functionality here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
