import axios from 'axios';

const API = axios.create({
  baseURL: 'https://fakestoreapi.com', // Using fake store API
  timeout: 5000,
});

export const fetchProducts = async () => {
  try {
    const response = await API.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

export const fetchProductDetails = async (id) => {
  try {
    const response = await API.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Product not found');
  }
};