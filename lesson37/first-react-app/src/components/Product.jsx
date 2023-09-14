import React from 'react';
import './Product.css';

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default Product;
