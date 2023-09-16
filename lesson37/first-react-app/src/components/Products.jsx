import React from 'react';
import './Products.css';
import Product from './Product';

function Products() {
  const products = [
    { id: 1, name: 'Iphone 14', price: 1199.99, imageUrl: 'src/components/image/iphone 14.jpg' },
    { id: 2, name: 'Iphone 14 Pro', price: 1299.99, imageUrl: 'src/components/image/iphone 14 pro.jpg' },
    { id: 3, name: 'Iphone 14 Pro Max', price: 1399.99, imageUrl: 'src/components/image/iphone 14 pro max.jpg' }
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
