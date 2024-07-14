import React from 'react';

const PMultiplierConfirmation = ({ formData, handleSubmit }) => (
  <div>
    <h2>Confirmation</h2><br/>
    <pre>{JSON.stringify(formData, null, 2)}</pre>
    {/* <button onClick={handleSubmit}>Submit</button> */}
  </div>
);

export default PMultiplierConfirmation;
