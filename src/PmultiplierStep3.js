import React from 'react';

const PMultiplierStep3 = ({ formData, handleInputChange }) => (
  <div>
    <h2>Step 3: P Multiplier End</h2><br/>
    <input
      type="text"
      name="pMultiplierEnd"
      value={formData.pMultiplierEnd}
      onChange={handleInputChange}
      placeholder="Enter P Multiplier End"
      className="input-field"
    />
  </div>
);

export default PMultiplierStep3;
