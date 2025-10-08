import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ProductList from '../Components/Organisms/ProductList';
import { Button } from '../Components/Atoms/Button';
import product_service from '../services/product_service';

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState(product_service.getProducts());
  const navigate = useNavigate();

  const handleEdit = (product: any) => {
    navigate(`/edit-product/${product.id}`);
  };

  const handleDelete = (id: number) => {
    product_service.deleteProduct(id);
    setProducts(product_service.getProducts());
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button onClick={() => navigate('/add-product')}>Add Product</Button>
      </div>
      <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </MainLayout>
  );
};

export default ProductListPage;