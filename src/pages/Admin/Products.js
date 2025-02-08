// src/pages/Admin/Products.js
import React, { useState} from 'react';
import { useProducts } from '../../context/ProductContext';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductForm = styled.form`
  margin-bottom: 2rem;
  display: grid;
  gap: 1rem;
`;

const AdminProducts = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      ...formData,
      price: parseFloat(formData.price),
      id: Date.now()
    });
    setFormData({ title: '', price: '', description: '', category: '', image: '' });
  };

  return (
    <ProductsContainer>
      <h2>Manage Products</h2>
      
      <ProductForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({...formData, price: e.target.value})}
          required
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({...formData, image: e.target.value})}
          required
        />
        <button type="submit">Add Product</button>
      </ProductForm>

      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </ProductsContainer>
  );
};

export default AdminProducts;