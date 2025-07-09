import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const { itemCount } = useCart();
  const { currentTheme } = useTheme();
  const navigate = useNavigate();

  const categories = [
    'Dining Sets',
    'Seating',
    'Tables',
    'Shade Solutions',
    'Planters',
    'Fire Features',
    'Bar Furniture',
    'Storage'
  ];

  const handleProductsClick = () => {
    navigate('/products');
    setIsMenuOpen(false);
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
    setIsCollectionsOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="sticky top-0 z-50 shadow-lg"
      style={{
        backgroundColor: currentTheme.colors.primary,
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">Garden Furniture Store</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 hover:text-secondary transition-colors"
                onMouseEnter={() => setIsCollectionsOpen(true)}
                onMouseLeave={() => setIsCollectionsOpen(false)}
              >
                <span>Collections</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCollectionsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 shadow-xl rounded-lg py-2 z-50"
                  style={{
                    backgroundColor: currentTheme.colors.surface,
                    color: currentTheme.colors.text,
                  }}
                  onMouseEnter={() => setIsCollectionsOpen(true)}
                  onMouseLeave={() => setIsCollectionsOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className="text-left px-2 py-1 hover:text-secondary transition-colors text-sm"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleProductsClick}
              className="hover:text-secondary transition-colors"
            >
              Products
            </button>

            <Link to="/about" className="hover:text-secondary transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <ThemeSwitcher />
              <select className="border border-gray-500 text-white px-2 py-1 rounded text-sm" style={{ backgroundColor: currentTheme.colors.primary }}>
                <option>EN</option>
                <option>TR</option>
              </select>
              <select className="border border-gray-500 text-white px-2 py-1 rounded text-sm" style={{ backgroundColor: currentTheme.colors.primary }}>
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
              </select>
            </div>

            <Link to="/cart" className="relative">
              <svg className="w-6 h-6 hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13h10m-5 8a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-gray-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={handleProductsClick}
              className="block px-3 py-2 text-base font-medium hover:text-secondary transition-colors w-full text-left"
            >
              Products
            </button>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-3 py-2">
              <p className="text-sm text-gray-300 mb-2">Categories</p>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className="text-left text-sm hover:text-secondary transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;