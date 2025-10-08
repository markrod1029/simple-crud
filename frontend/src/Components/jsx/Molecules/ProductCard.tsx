import React from 'react';
import { Button } from '../Atoms/Button';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <p className="mt-2">{product.description}</p>
      <div className="mt-4 flex space-x-2">
        <Button onClick={() => onEdit(product)}>Edit</Button>
        <Button variant="destructive" onClick={() => onDelete(product.id)}>Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;