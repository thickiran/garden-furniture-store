// Placeholder image URLs from high-quality furniture image sources
export const placeholderImages = {
  'dining-sets': [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=600&fit=crop&crop=center',
  ],
  'seating': [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
  ],
  'shade-solutions': [
    'https://images.unsplash.com/photo-1544737151043-6516cd1e9db1?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop&crop=center',
  ],
  'tables': [
    'https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&crop=center',
  ],
  'planters': [
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop&crop=center',
  ],
  'fire-features': [
    'https://images.unsplash.com/photo-1574008863-0dc8ebaa5631?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&h=600&fit=crop&crop=center',
  ],
  'bar-furniture': [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=600&fit=crop&crop=center',
  ],
  'storage': [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop&crop=center',
  ],
};

// Function to get a placeholder image based on category
export const getPlaceholderImage = (category: string, index: number = 0): string => {
  const categoryKey = category.toLowerCase().replace(/\s+/g, '-');
  const images = placeholderImages[categoryKey as keyof typeof placeholderImages];
  
  if (images && images.length > 0) {
    return images[index % images.length];
  }
  
  // Fallback to a general furniture image
  return 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&crop=center';
};

// Enhanced placeholder URLs with specific furniture types
export const specificFurnitureImages = {
  'outdoor-dining-set': 'https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=600&fit=crop&crop=center',
  'garden-lounge-chair': 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop&crop=center',
  'patio-umbrella': 'https://images.unsplash.com/photo-1544737151043-6516cd1e9db1?w=800&h=600&fit=crop&crop=center',
  'garden-bench': 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop&crop=center',
  'outdoor-coffee-table': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&crop=center',
  'garden-planter-set': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&crop=center',
  'outdoor-sectional': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
  'fire-pit-table': 'https://images.unsplash.com/photo-1574008863-0dc8ebaa5631?w=800&h=600&fit=crop&crop=center',
  'hanging-chair': 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop&crop=center',
  'outdoor-bar-set': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&crop=center',
  'garden-swing': 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop&crop=center',
  'outdoor-storage-box': 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop&crop=center',
  'luxury-chaise-longue-4': 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop&crop=center',
  'luxury-chaise-longue-5': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
};

export const getProductImage = (productId: string, fallbackCategory?: string): string => {
  // Check if we have a specific image for this product
  if (specificFurnitureImages[productId as keyof typeof specificFurnitureImages]) {
    return specificFurnitureImages[productId as keyof typeof specificFurnitureImages];
  }
  
  // Fallback to category-based placeholder
  if (fallbackCategory) {
    return getPlaceholderImage(fallbackCategory);
  }
  
  // Ultimate fallback
  return 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&crop=center';
};