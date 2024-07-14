import React, { useState } from 'react';
import PMultiplierStep1 from './PMultiplierStep1';
import PMultiplierStep2 from './PMultiplierStep2';
import PMultiplierStep3 from './PmultiplierStep3';
import PMultiplierConfirmation from './Pmultiplierconfirmstion';

const PMultiplierWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    pMultiplierStart: '',
    pMultiplierEnd: '',
    soilLayers: [],
  });

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handleBack = () => setCurrentStep(currentStep - 1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddSoilLayer = () => {
    setFormData({
      ...formData,
      soilLayers: [...formData.soilLayers, { soilLayer: '', value: '' }],
    });
  };

  const handleSoilLayerChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSoilLayers = [...formData.soilLayers];
    updatedSoilLayers[index][name] = value;
    setFormData({
      ...formData,
      soilLayers: updatedSoilLayers,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  let stepComponent;
  switch (currentStep) {
    case 1:
      stepComponent = <PMultiplierStep1 formData={formData} handleInputChange={handleInputChange} />;
      break;
    case 2:
      stepComponent = <PMultiplierStep2 formData={formData} handleAddSoilLayer={handleAddSoilLayer} handleSoilLayerChange={handleSoilLayerChange} />;
      break;
    case 3:
      stepComponent = <PMultiplierStep3 formData={formData} handleInputChange={handleInputChange} />;
      break;
    case 4:
      stepComponent = <PMultiplierConfirmation formData={formData} handleSubmit={handleSubmit} />;
      break;
    default:
      stepComponent = null;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            onClick={() => setCurrentStep(step)}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              borderBottom: currentStep === step ? '2px solid #007bff' : '2px solid transparent',
            }}
          >
            Step {step}
          </div>
        ))}
      </div>
      {stepComponent}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {currentStep !== 1 && (
          <button onClick={handleBack} style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#263e42', cursor: 'pointer' }}>
            Back
          </button>
        )}
        {currentStep !== 4 ? (
          <button onClick={handleNext} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: '1px solid #007bff', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: '1px solid #007bff', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default PMultiplierWizard;
