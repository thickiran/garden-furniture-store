import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `https://via.placeholder.com/800x600/E5E7EB/6B7280?text=${encodeURIComponent(product.name)}`;
  };

  return (
    <Link to={`/products/${product.id}`} className="block group">
      <div className="card overflow-hidden transform hover:scale-105 transition-all duration-300" onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-secondary)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}>
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover bg-gray-200"
            onError={handleImageError}
            loading="lazy"
          />
        </div>
        
        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {product.category}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-secondary">
              ${product.price}
            </span>
            
            <button
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;