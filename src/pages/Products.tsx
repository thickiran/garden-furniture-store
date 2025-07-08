import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const categoryFilter = searchParams.get('category') || undefined;

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    window.history.pushState({}, '', '/products');
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: 'var(--color-muted)'}}>
      <div className="py-12" style={{backgroundColor: 'var(--color-surface)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{color: 'var(--color-text)'}}>
              {categoryFilter ? `${categoryFilter} Collection` : 'All Products'}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of premium garden furniture designed to transform your outdoor space.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 hover:text-gray-600"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {(categoryFilter || searchTerm) && (
              <button
                onClick={clearFilters}
                className="px-6 py-3 text-white rounded-lg transition-colors"
              style={{backgroundColor: 'var(--color-primary)'}}
              onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.9'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
              >
                Clear Filters
              </button>
            )}
          </div>

          {categoryFilter && (
            <div className="mt-4 text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)', color: 'var(--color-primary)'}}>
                Category: {categoryFilter}
              </span>
            </div>
          )}
        </div>
      </div>

      <ProductGrid categoryFilter={categoryFilter} searchTerm={searchTerm} />
    </div>
  );
};

export default Products;