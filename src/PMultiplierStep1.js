import React from 'react';

const PMultiplierStep1 = ({ formData, handleInputChange }) => (
  <div>
    <h2>Step 1: P Multiplier Start</h2><br/>
    <input
      type="text"
      name="pMultiplierStart"
      value={formData.pMultiplierStart}
      onChange={handleInputChange}
      placeholder="Enter P Multiplier Start"
      className="input-field"
    />
  </div>
);

export default PMultiplierStep1;
