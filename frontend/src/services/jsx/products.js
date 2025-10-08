import apiClient from './';

export const productService = {
  getAll: async () => {
    const response = await apiClient.get('/products');
    return response.data;
  },
}
