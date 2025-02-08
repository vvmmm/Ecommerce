import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import './ProductList.css';

const ProductList = () => {
  const { category } = useParams();
  const { products, loading, error } = useProducts();

  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="product-list-page">
      <h2>{category ? category.toUpperCase() : 'All Products'}</h2>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;