import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const { itemCount } = useCart();
  const { currentTheme, isGlassy } = useTheme();
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
      className={`sticky top-0 z-50 shadow-lg ${isGlassy ? 'backdrop-blur-md bg-white/10 border-b border-white/20' : ''}`}
      style={isGlassy ? { color: currentTheme.colors.text } : {
        backgroundColor: currentTheme.colors.primary,
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">Jardin Privé</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button
                className="flex items-center space-x-1 px-4 py-2 rounded-xl hover:text-secondary transition-all duration-400 ease-out hover:scale-105 hover:bg-white/10 hover:backdrop-blur-sm hover:border-2 hover:border-white/30 hover:shadow-lg hover:shadow-white/20 border-2 border-transparent"
              >
                <span>Collections</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCollectionsOpen && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                >
                  <div
                    className="w-64 shadow-xl rounded-lg py-2"
                    style={{
                      backgroundColor: isGlassy ? 'rgba(255,255,255,0.24)' : currentTheme.colors.surface,
                      color: currentTheme.colors.text,
                      backdropFilter: isGlassy ? 'blur(16px)' as any : undefined,
                      WebkitBackdropFilter: isGlassy ? 'blur(16px)' as any : undefined,
                      border: isGlassy ? '1px solid rgba(255,255,255,0.35)' : undefined,
                    }}
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
                </div>
              )}
            </div>

            <button
              onClick={handleProductsClick}
              className="px-4 py-2 rounded-xl hover:text-secondary transition-all duration-400 ease-out hover:scale-105 hover:bg-white/10 hover:backdrop-blur-sm hover:border-2 hover:border-white/30 hover:shadow-lg hover:shadow-white/20 border-2 border-transparent"
            >
              Products
            </button>

            <Link 
              to="/about" 
              className="px-4 py-2 rounded-xl hover:text-secondary transition-all duration-400 ease-out hover:scale-105 hover:bg-white/10 hover:backdrop-blur-sm hover:border-2 hover:border-white/30 hover:shadow-lg hover:shadow-white/20 border-2 border-transparent inline-block"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <ThemeSwitcher />
              <select 
                className={`px-2 py-1 rounded text-sm ${isGlassy ? 'glass-button border-white/30' : 'border border-gray-500'}`}
                style={isGlassy ? { background: 'rgba(255,255,255,0.15)', color: currentTheme.colors.text } : { backgroundColor: currentTheme.colors.primary, color: 'white' }}
              >
                <option>EN</option>
                <option>TR</option>
              </select>
              <select 
                className={`px-2 py-1 rounded text-sm ${isGlassy ? 'glass-button border-white/30' : 'border border-gray-500'}`}
                style={isGlassy ? { background: 'rgba(255,255,255,0.15)', color: currentTheme.colors.text } : { backgroundColor: currentTheme.colors.primary, color: 'white' }}
              >
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