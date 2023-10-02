import React from 'react';
import '../style/Cart.css';

function Cart({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart">
        <img src="/image/images1.png" alt="Зображення корзини" />
        <p>{totalItems}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.title} x{item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;



