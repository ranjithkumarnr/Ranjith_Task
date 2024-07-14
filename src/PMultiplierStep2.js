import React from 'react';

const PMultiplierStep2 = ({ formData, handleAddSoilLayer, handleSoilLayerChange }) => (
  <div>
    <h2>Step 2: Soil Layers</h2><br/>
    {formData.soilLayers.map((layer, index) => (
      <div key={index}>
        <input
          type="text"
          name="soilLayer"
          value={layer.soilLayer}
          onChange={(e) => handleSoilLayerChange(index, e)}
          placeholder="Enter Soil Layer"
          className="input-field"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          name="value"
          value={layer.value}
          onChange={(e) => handleSoilLayerChange(index, e)}
          placeholder="Enter Value"
          className="input-field"
        />&nbsp;&nbsp;
      </div>
    ))}<br/>
    <button onClick={handleAddSoilLayer} style={{color:'ButtonText'}}>Add Soil Layer</button>
  </div>
);

export default PMultiplierStep2;
