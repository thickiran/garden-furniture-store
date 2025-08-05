import React, { useState, useEffect } from 'react';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/teak-chaise.jpg',
      title: 'Chaise Longue Riviera Teck',
      subtitle: 'Luxurious teak craftsmanship with adjustable comfort for ultimate relaxation'
    },
    {
      image: '/images/obsidian-chaise.jpg',
      title: 'Chaise Longue Obsidienne Élite',
      subtitle: 'Sophisticated black aluminum design with premium comfort padding'
    },
    {
      image: '/images/onyx-chaise.jpg',
      title: 'Transat Onyx Sophistiqué',
      subtitle: 'Ultra-modern mesh design with superior breathability and style'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden" style={{backgroundColor: 'rgb(223, 223, 221)'}}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-contain z-0"
          />
        </div>
      ))}

      <div className="absolute inset-0 flex items-end justify-center pb-16 z-10">
        <div className="text-center text-white px-6 py-8 max-w-2xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Glass effect overlay with subtle dark backdrop for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 transition-all duration-500 drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl mb-6 transition-all duration-500 drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>
            <button
              onClick={scrollToProducts}
              className="backdrop-blur-sm bg-white/20 hover:bg-white/30 border border-white/30 text-white text-base px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop Collection
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full backdrop-blur-sm border border-white/30 transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white/80 shadow-lg' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-sm bg-white/20 hover:bg-white/40 border border-white/30 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-sm bg-white/20 hover:bg-white/40 border border-white/30 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroCarousel;