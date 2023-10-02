import React, { useState, useEffect, createContext } from 'react';
import '../style/Products.css';
import Product from './Product';
import CreateProduct from './CreateProduct';

export const ProductContext = createContext();

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

  const addNewProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className='products'>
      <ProductContext.Provider value={{ products, addNewProduct }}>
        <CreateProduct />
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ProductContext.Provider>
    </div>
  );
}

export default Products;





