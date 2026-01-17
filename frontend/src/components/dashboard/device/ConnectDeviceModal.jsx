// src/components/device/ConnectDeviceModal.jsx
import React, { useState } from 'react';
import './ConnectDeviceModal.css';

const ConnectDeviceModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle'); 
  const handleConnect = () => {
    setStatus('connecting');
    setTimeout(() => {
      setStatus('success');
      setStep(3);
    }, 3000);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>

        {step === 1 && (
          <>
            <h2 id="modal-title">Connect Your Device</h2>
            <p>Sync data from Apple Watch, Fitbit, Garmin, Oura, Whoop or any HealthKit/Google Fit device.</p>
            <div className="device-options">
              {['Apple Watch', 'Fitbit', 'Garmin', 'Oura Ring', 'Google Fit'].map(device => (
                <button key={device} className="device-btn" onClick={() => setStep(2)}>
                  <span className="device-icon">Watch</span> {device}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Connecting to Apple Watch</h2>
            <div className="pairing-instructions">
              <ol>
                <li>Open Health app on your iPhone</li>
                <li>Go to Sources → Apps</li>
                <li>Select HealthTrack</li>
                <li>Allow all permissions</li>
              </ol>
              <button className="btn-primary" onClick={handleConnect} disabled={status === 'connecting'}>
                {status === 'connecting' ? 'Connecting...' : 'Start Pairing'}
              </button>
            </div>
          </>
        )}

        {step === 3 && status === 'success' && (
          <div className="success-state">
            <span className="success-icon">Check</span>
            <h2>Connected Successfully!</h2>
            <p>Your data will sync automatically every hour.</p>
            <button className="btn-primary" onClick={onClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectDeviceModal;