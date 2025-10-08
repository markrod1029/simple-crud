interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

let products: Product[] = [
  { id: 1, name: 'Laptop', price: 1200, description: 'A high-performance laptop.' },
  { id: 2, name: 'Smartphone', price: 800, description: 'A latest model smartphone.' },
  { id: 3, name: 'Headphones', price: 150, description: 'Noise-cancelling headphones.' },
];

const getProducts = () => {
  return products;
};

const getProductById = (id: number) => {
  return products.find((p) => p.id === id);
};

const addProduct = (product: Product) => {
  products.push(product);
};

const updateProduct = (updatedProduct: Product) => {
  products = products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p));
};

const deleteProduct = (id: number) => {
  products = products.filter((p) => p.id !== id);
};

const product_service = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};

export default product_service;