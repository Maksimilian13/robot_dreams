import React, { useState, useEffect } from 'react';
import '../style/Products.css';
import Product from './Product';

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        const productsArray = data.products || [];
        setProducts(productsArray);
      })
      .catch((error) => {
        console.error('Помилка при отриманні товарів:', error);
      });
  }, []);

  return (
    <div className='products'>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;

