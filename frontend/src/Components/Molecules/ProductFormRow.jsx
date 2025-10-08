import React from 'react';
import InputField from '../Atoms/InputField';
import IconButton from '../Atoms/IconButton';
import { Save, X } from 'lucide-react';

export default function ProductFormRow({ formData, setFormData, onSave, onCancel }) {
  return (
    <tr className="bg-blue-50">
      {['name', 'category', 'price', 'stock', 'sales'].map((field) => (
        <td key={field} className="px-6 py-4">
          <InputField
            type={field === 'price' || field === 'stock' || field === 'sales' ? 'number' : 'text'}
            value={formData[field]}
            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            placeholder={field}
          />
        </td>
      ))}
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <IconButton icon={Save} color="text-green-600" onClick={onSave} />
          <IconButton icon={X} color="text-red-600" onClick={onCancel} />
        </div>
      </td>
    </tr>
  );
}
