import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/Vikasharyan202/sarino-json-server/products';

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

export const updateProduct = async (product) => {
  const response = await axios.put(`${API_URL}/${product.id}`, product);
  return response.data;
};

export const deleteProduct = async (productId) => {
  const response = await axios.delete(`${API_URL}/${productId}`);
  return response.data;
};
