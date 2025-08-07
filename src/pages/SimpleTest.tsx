import React from 'react';

const SimpleTest: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple Test Page</h1>
      <p>Iframe embed code exactly as provided:</p>
      
      <div>
        <iframe 
          allowFullScreen 
          frameBorder='0' 
          width='750px' 
          height='500px' 
          src='https://server.veewer.com/api/v1/objects/viewer/686ce77e524f98d61ab446fa'
        />
      </div>
    </div>
  );
};

export default SimpleTest;