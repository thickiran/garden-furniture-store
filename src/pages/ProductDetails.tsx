import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { useCart } from '../hooks/useCart';
import productsData from '../data/products.json';
import { Helmet } from 'react-helmet';

const cleanVewerUrl = (embedHtml: string): string => {
  if (!embedHtml) return '';
  
  console.log('🔍 INPUT embed HTML:', embedHtml);
  
  const srcMatch = embedHtml.match(/src=['"]([^'"]+)['"]/);
  if (!srcMatch) {
    console.warn('No src attribute found in embed HTML');
    return '';
  }
  
  const fullUrl = srcMatch[1];
  console.log('📎 EXTRACTED full URL:', fullUrl);
  
  // Extract everything up to and including /viewer/[code]/
  const viewerMatch = fullUrl.match(/(https?:\/\/[^\/]+\/api\/v1\/objects\/viewer\/[^\/]+\/)/);
  
  if (viewerMatch) {
    const cleanUrl = viewerMatch[1];
    console.log('✂️ CLEANED URL (final result):', cleanUrl);
    console.log('🚫 REMOVED:', fullUrl.replace(cleanUrl, ''));
    return cleanUrl;
  }
  
  console.warn('❌ Could not extract clean viewer URL, returning empty string');
  console.warn('❌ Original URL was:', fullUrl);
  return '';
};

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  model: string;
  modelEmbed?: string;
  category: string;
  description: string;
  features: string[];
}

const Model: React.FC<{ url: string }> = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={[1, 1, 1]} />;
};

const ErrorBoundary: React.FC<{ children: React.ReactNode; fallback?: React.ReactNode }> = ({ 
  children, 
  fallback = <div className="text-gray-500 text-center p-8">3D model unavailable</div> 
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [children]);

  if (hasError) {
    return <>{fallback}</>;
  }

  return (
    <div onError={() => setHasError(true)}>
      {children}
    </div>
  );
};

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'features' | '3d'>('description');
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === id) as Product;
    setProduct(foundProduct || null);
    setIframeError(false);
    setIframeLoading(true);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product?.modelEmbed && activeTab === '3d') {
      // Set a timeout to detect if iframe fails to load within 10 seconds
      const timeoutId = setTimeout(() => {
        if (iframeLoading) {
          console.warn('Iframe loading timeout for product:', product.id);
          setIframeLoading(false);
          setIframeError(true);
        }
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, [product?.id, iframeLoading, product?.modelEmbed, activeTab]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text mb-4">Product Not Found</h2>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  const relatedProducts = productsData.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{product.name} - Jardin Privé</title>
        <meta name="description" content={product.description} />
      </Helmet>
      
      <div className="min-h-screen" style={{backgroundColor: 'var(--color-surface)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li className="before:content-['/'] before:mx-2">
                <Link to="/products" className="hover:text-primary">Products</Link>
              </li>
              <li className="before:content-['/'] before:mx-2">
                <Link to={`/products?category=${product.category}`} className="hover:text-primary">
                  {product.category}
                </Link>
              </li>
              <li className="before:content-['/'] before:mx-2 text-text">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div
                  className="w-full h-96 bg-gray-200 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
              
              <div className="mt-6">
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`px-4 py-2 font-medium text-sm ${
                      activeTab === 'description' 
                        ? 'border-b-2 text-gray-500 hover:text-gray-700'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    style={activeTab === 'description' ? {borderBottomColor: 'var(--color-primary)', color: 'var(--color-primary)'} : {}}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`px-4 py-2 font-medium text-sm ${
                      activeTab === 'features' 
                        ? 'border-b-2 text-gray-500 hover:text-gray-700'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    style={activeTab === 'features' ? {borderBottomColor: 'var(--color-primary)', color: 'var(--color-primary)'} : {}}
                  >
                    Features
                  </button>
                  <button
                    onClick={() => setActiveTab('3d')}
                    className={`px-4 py-2 font-medium text-sm ${
                      activeTab === '3d' 
                        ? 'border-b-2 text-gray-500 hover:text-gray-700'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    style={activeTab === '3d' ? {borderBottomColor: 'var(--color-primary)', color: 'var(--color-primary)'} : {}}
                  >
                    3D View
                  </button>
                </div>
                
                <div className="mt-4">
                  {activeTab === 'description' && (
                    <p className="text-gray-600">{product.description}</p>
                  )}
                  
                  {activeTab === 'features' && (
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {activeTab === '3d' && (
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                      <div className="bg-blue-500 text-white p-2 text-center font-bold">
                        🔍 DEBUGGING IFRAME HTML 🔍
                      </div>
                      {product.modelEmbed ? (
                        <div className="w-full aspect-[3/2] relative">
                          {(() => {
                            console.log('🎯 EXACT IFRAME HTML BEING RENDERED:');
                            console.log(product.modelEmbed);
                            console.log('🎯 END OF IFRAME HTML');
                            return <div dangerouslySetInnerHTML={{ __html: product.modelEmbed }} />;
                          })()}
                        </div>
                      ) : product.model ? (
                        <ErrorBoundary fallback={
                          <div className="w-full aspect-[3/2] flex items-center justify-center bg-gray-100">
                            <p className="text-gray-500">3D model unavailable</p>
                          </div>
                        }>
                          <div className="w-full aspect-[3/2]">
                            <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
                              <ambientLight intensity={0.5} />
                              <directionalLight position={[10, 10, 5]} intensity={1} />
                              <Suspense fallback={null}>
                                <Model url={product.model} />
                                <Environment preset="sunset" />
                              </Suspense>
                              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                            </Canvas>
                          </div>
                        </ErrorBoundary>
                      ) : (
                        <div className="w-full aspect-[3/2] flex items-center justify-center bg-gray-100">
                          <p className="text-gray-500">3D model not available</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="mb-4">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4" style={{color: 'var(--color-text)'}}>{product.name}</h1>
              
              <div className="mb-6">
                <span className="text-3xl font-bold" style={{color: 'var(--color-secondary)'}}>${product.price}</span>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary mb-4"
              >
                Add to Cart - ${(product.price * quantity).toLocaleString()}
              </button>
              
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Category:</strong> {product.category}
                  </div>
                  <div>
                    <strong>SKU:</strong> {product.id.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <Link
                    key={relatedProduct.id}
                    to={`/products/${relatedProduct.id}`}
                    className="card p-4 hover:shadow-xl transition-shadow"
                  >
                    <div
                      className="w-full h-48 bg-gray-200 bg-cover bg-center rounded-lg mb-4"
                      style={{
                        backgroundImage: `url(${relatedProduct.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <h3 className="font-semibold text-text mb-2">{relatedProduct.name}</h3>
                    <p className="text-secondary font-bold">${relatedProduct.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;