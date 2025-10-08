import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productService = {
  getAll: async () => {
    const response = await api.get('/products');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  create: async (product) => {
    const response = await api.post('/products', product);
    return response.data;
  },

  update: async (id, product) => {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  },

  delete: async (id) => {
    await api.delete(`/products/${id}`);
  },
};

export default api;