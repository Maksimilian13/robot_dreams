import React from 'react';
import '../style/Header.css';
import Cart from './Cart';

function Header({ cartItems }) {
  return (
    <header>
      <h1>My Online Store</h1>
      <Cart cartItems={cartItems} />
    </header>
  );
}

export default Header;