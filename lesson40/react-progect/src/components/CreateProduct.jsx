import React, { useContext, useState } from 'react';
import { ProductContext } from './Products';
import '../style/CreateProduct.css';

const CreateProduct = () => {
  const { addNewProduct } = useContext(ProductContext);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    image: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: Date.now(), 
      title: newProduct.title,
      price: newProduct.price,
      images: [newProduct.image],
    };
    addNewProduct(product);
    setNewProduct({
      title: '',
      price: 0,
      image: '', 
    });
  };

  return (
    <div className="create-product-container">
      <h2>Додати новий товар</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Назва товару:</label>
          <input
            type="text"
            id="title"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="price">Ціна:</label>
          <input
            type="number"
            id="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="image">URL зображення:</label>
          <input
            type="text"
            id="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
        </div>
        <button type="submit">Додати товар</button>
      </form>
    </div>
  );
};

export default CreateProduct;

