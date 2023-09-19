import React, { useState } from 'react';
import './App.css';
import Header from './components/jsx/Header';
import Products from './components/jsx/Products';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <Products addToCart={addToCart} />
    </div>
  );
}

export default App;


