import React from 'react';
import ProductRow from './ProductTable';
// import ProductFormRow from './ProductFormRow.jsx';
import Button from '../Atoms/Button';
import { Plus } from 'lucide-react';

export default function ProductTable({
  products,
  isAdding,
  editingId,
  formData,
  setFormData,
  onAdd,
  onEdit,
  onSave,
  onCancel,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold">Product Management</h2>
        <Button onClick={onAdd} disabled={isAdding || editingId}>
          <Plus size={20} /> Add Product
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              {['Name', 'Category', 'Price', 'Stock', 'Sales', 'Actions'].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            {isAdding && (
              <ProductFormRow
                formData={formData}
                setFormData={setFormData}
                onSave={onSave}
                onCancel={onCancel}
              />
            )}
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                editing={editingId === product.id}
                formData={formData}
                setFormData={setFormData}
                onEdit={() => onEdit(product)}
                onSave={onSave}
                onCancel={onCancel}
                onDelete={() => onDelete(product.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
