import React from 'react';
import { Helmet } from 'react-helmet';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Jardin Privé</title>
        <meta name="description" content="Learn about our commitment to quality outdoor furniture and exceptional customer service." />
      </Helmet>
      
      <div className="min-h-screen" style={{backgroundColor: 'var(--color-surface)'}}>
        <div className="text-white py-16" style={{backgroundColor: 'var(--color-primary)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Jardin Privé</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Creating beautiful outdoor spaces with premium furniture that stands the test of time.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--color-text)'}}>Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, Jardin Privé has been dedicated to transforming outdoor spaces 
                  into beautiful, functional living areas. We believe that your garden should be an extension 
                  of your home, a place where memories are made and moments are cherished.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey began with a simple mission: to provide high-quality, weather-resistant 
                  furniture that combines style, comfort, and durability. Over the years, we've built 
                  relationships with trusted manufacturers and artisans who share our commitment to excellence.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to serve thousands of customers across the country, helping them 
                  create outdoor spaces that reflect their personal style and enhance their quality of life.
                </p>
              </div>
              
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Our Story Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16" style={{backgroundColor: 'var(--color-muted)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--color-text)'}}>Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do and shape our commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--color-primary)'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality First</h3>
                <p className="text-gray-600">
                  We carefully select materials and work with skilled craftsmen to ensure every piece 
                  meets our high standards for durability and beauty.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--color-primary)'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We provide exceptional service from selection 
                  to delivery and beyond, ensuring a seamless experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--color-primary)'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to responsible sourcing and sustainable practices, choosing materials 
                  that are both beautiful and environmentally conscious.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16" style={{backgroundColor: 'yellow', padding: '20px'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 style={{color: 'red', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px'}}>🧪 VEEWER TEST SECTION 🧪</h1>
            
            <h2 style={{color: 'black', fontSize: '24px', marginBottom: '10px'}}>Test 1: Riviera Teck (Direct React iframe)</h2>
            <div style={{ marginBottom: '30px' }}>
              <iframe 
                allowFullScreen
                width="750"
                height="500"
                frameBorder="0"
                src="https://server.veewer.com/api/v1/objects/viewer/686ce77e524f98d61ab446fa"
                style={{ border: '5px solid red' }}
              />
            </div>
            
            <h2 style={{color: 'black', fontSize: '24px', marginBottom: '10px'}}>Test 2: dangerouslySetInnerHTML (same as ProductDetails)</h2>
            <div style={{ marginBottom: '30px' }}>
              <div dangerouslySetInnerHTML={{ 
                __html: '<iframe allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" fullscreen frameborder="0" width="750px" height="500px" src="https://server.veewer.com/api/v1/objects/viewer/686ce77e524f98d61ab446fa" style="border: 5px solid green;"></iframe>' 
              }} />
            </div>
            
            {(() => {
              console.log('🧪 ABOUT PAGE - VEEWER TESTS LOADED');
              console.log('🧪 Check network tab to see what requests are made');
              console.log('🧪 Red border = Direct React iframe');
              console.log('🧪 Green border = dangerouslySetInnerHTML');
              return null;
            })()}
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--color-text)'}}>Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We go above and beyond to ensure your outdoor furniture experience exceeds expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--color-primary)'}}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Free Delivery</h3>
                  <p className="text-gray-600">Complimentary white-glove delivery service on orders over $500.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--color-primary)'}}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
                  <p className="text-gray-600">All products come with comprehensive warranties and quality assurance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--color-primary)'}}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                  <p className="text-gray-600">Our knowledgeable team provides personalized design consultation.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--color-primary)'}}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
                  <p className="text-gray-600">30-day return policy with hassle-free exchanges and refunds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;