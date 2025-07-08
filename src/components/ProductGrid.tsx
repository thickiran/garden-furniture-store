import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductGridProps {
  categoryFilter?: string;
  searchTerm?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ categoryFilter, searchTerm }) => {
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');
  
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = productsData as Product[];
    
    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    return sorted;
  }, [categoryFilter, searchTerm, sortBy]);

  const categories = [...new Set(productsData.map(product => product.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-text mb-2">
            {categoryFilter ? `${categoryFilter} Collection` : 'All Products'}
          </h2>
          <p className="text-gray-600">
            {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'price-low' | 'price-high')}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {!categoryFilter && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Shop by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => window.location.href = `/products?category=${encodeURIComponent(category)}`}
                className="px-4 py-2 bg-muted hover:bg-primary hover:text-white rounded-md text-sm transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;