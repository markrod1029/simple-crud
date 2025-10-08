import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Dashboard
        </Link>
        <div>
          <Link to="/products" className="mr-4">
            Products
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;