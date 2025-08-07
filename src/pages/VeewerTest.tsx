import React from 'react';

const VeewerTest: React.FC = () => {
  console.log('🧪 MINIMAL TEST COMPONENT LOADED');
  console.log('🧪 Check network tab to see what requests are made');
  console.log('🧪 If you see parameter requests here, the issue is with Veewer itself');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Veewer Test - Minimal React Component</h1>
      <p>This component contains ONLY the iframes - no other processing</p>
      
      <h2>Test 1: Riviera Teck (686ce77e524f98d61ab446fa)</h2>
      <div style={{ marginBottom: '30px' }}>
        <iframe 
          allowFullScreen
          width="750"
          height="500"
          frameBorder="0"
          src="https://server.veewer.com/api/v1/objects/viewer/686ce77e524f98d61ab446fa"
          style={{ border: '2px solid red' }}
        />
      </div>
      
      <h2>Test 2: Exécutif Monaco (686ce882524f98d61ab44702)</h2>
      <div style={{ marginBottom: '30px' }}>
        <iframe 
          allowFullScreen
          width="750"
          height="500"
          frameBorder="0"
          src="https://server.veewer.com/api/v1/objects/viewer/686ce882524f98d61ab44702"
          style={{ border: '2px solid blue' }}
        />
      </div>
      
      <h2>Raw HTML Test (dangerouslySetInnerHTML)</h2>
      <div style={{ marginBottom: '30px' }}>
        <div dangerouslySetInnerHTML={{ 
          __html: '<iframe allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" fullscreen frameborder="0" width="750px" height="500px" src="https://server.veewer.com/api/v1/objects/viewer/686ce77e524f98d61ab446fa" style="border: 2px solid green;"></iframe>' 
        }} />
      </div>
    </div>
  );
};

export default VeewerTest;