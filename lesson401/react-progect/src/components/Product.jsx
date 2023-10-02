import React, { useState } from 'react';
import '../style/Product.css';

function Product({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart(product);
    setQuantity(quantity + 1);
  };

  const firstImage = product.images[0];

  return (
    <div className="product">
      <img src={firstImage} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Додати в кошик</button>
      <p>Кількість у кошику: {quantity}</p>
    </div>
  );
}

export default Product;

