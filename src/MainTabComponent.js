import React, { useState } from 'react';
import PMultiplierWizard from './PMultiplierWizard';

const MainTabComponent = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [hoverTab, setHoverTab] = useState(null);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      {/* <h1 style={{ textAlign: 'center' }}>Main Tab Component</h1> */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div
          onClick={() => setActiveTab('pMultiplier')}
          onMouseEnter={() => setHoverTab('pMultiplier')}
          onMouseLeave={() => setHoverTab(null)}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            borderBottom: activeTab === 'pMultiplier' ? '2px solid #007bff' : '2px solid transparent',
            // backgroundColor: hoverTab === 'pMultiplier' ? '#007bff' : 'transparent',
            // color: hoverTab === 'pMultiplier' ? '#fff' : '#000',
            backgroundColor : '#cbf2f5',
            color:'#898e8f',
            borderRadius: '50px', // You can adjust the shape using border-radius
          }}
        >
          P Multiplier
        </div>
      </div>
      {activeTab === 'pMultiplier' && <PMultiplierWizard />}
    </div>
  );
};

export default MainTabComponent;
