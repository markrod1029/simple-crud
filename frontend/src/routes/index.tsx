import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import ProductListPage from '../Pages/ProductListPage';
import AddProductPage from '../Pages/AddProductPage';
import EditProductPage from '../Pages/EditProductPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/add-product" element={<AddProductPage />} />
      <Route path="/edit-product/:id" element={<EditProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
