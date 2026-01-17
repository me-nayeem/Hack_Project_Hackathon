// MedicinePartner.jsx
import React, { useState } from 'react';
import './MedicineTaking.css';
import Navbar from '../../components/dashboard/Navbar/Navbar';

export default function MedicineTaking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    medicineName: '',
    dosage: '',
    timeOfDay: '',     
    mealRelation: '',   
    startDate: '',
    endDate: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.medicineName.trim()) return alert("Please enter medicine name");
    if (step === 2 && !formData.timeOfDay) return alert("Please select when to take");
    if (step === 3 && !formData.mealRelation) return alert("Please select before or after meal");
    if (step === 4 && (!formData.startDate || !formData.endDate)) return alert("Please select date range");

    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = () => {
    alert(`Medicine schedule saved!\n\n${JSON.stringify(formData, null, 2)}`);
    setStep(1);
    setFormData({
      medicineName: '', dosage: '', timeOfDay: '', mealRelation: '',
      startDate: '', endDate: '', notes: ''
    });
  };

  const timeOptions = [
    { value: 'morning', label: 'Morning', icon: '☀️' },
    { value: 'noon',    label: 'Lunch / Noon', icon: '🌤️' },
    { value: 'night',   label: 'Night / Bedtime', icon: '🌙' },
    { value: 'custom',  label: 'Custom time', icon: '⏰' },
  ];

  const mealOptions = [
    { value: 'before', label: 'Before Meal' },
    { value: 'after',  label: 'After Meal' },
  ];

  return (
    <>
    <Navbar />
    <div className="medicine-page">
      <header className="page-header">
        <h1>Medicine Taking Partner</h1>
        <p>Never miss a dose – stay consistent and healthy</p>
      </header>

      <div className="form-container">
        {step === 1 && (
          <div className="step-card">
            <h2>1. What medicine are you taking?</h2>
            <input
              type="text"
              name="medicineName"
              placeholder="e.g. Paracetamol, Vitamin D3, Metformin..."
              value={formData.medicineName}
              onChange={handleChange}
              className="medicine-input"
            />

            <input
              type="text"
              name="dosage"
              placeholder="Dosage (e.g. 500 mg, 1 tablet, 2 capsules...)"
              value={formData.dosage}
              onChange={handleChange}
              className="dosage-input"
            />

            <div className="notes-field">
              <label>Additional notes / instructions</label>
              <textarea
                name="notes"
                placeholder="e.g. Take with plenty of water, avoid alcohol..."
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-primary next-btn" onClick={handleNext}>
              Next →
            </button>
          </div>
        )}

        {/* Step 2 – Time of Day */}
        {step === 2 && (
          <div className="step-card">
            <h2>2. When do you want to take it?</h2>
            <div className="time-options">
              {timeOptions.map(opt => (
                <button
                  key={opt.value}
                  className={`time-btn ${formData.timeOfDay === opt.value ? 'selected' : ''}`}
                  onClick={() => handleChange({ target: { name: 'timeOfDay', value: opt.value } })}
                >
                  <span className="time-icon">{opt.icon}</span>
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="step-nav">
              <button className="btn btn-outline" onClick={handleBack}>Back</button>
              <button className="btn btn-primary next-btn" onClick={handleNext}>
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 – Before / After Meal */}
        {step === 3 && (
          <div className="step-card">
            <h2>3. Before or after meal?</h2>
            <div className="meal-options">
              {mealOptions.map(opt => (
                <button
                  key={opt.value}
                  className={`meal-btn ${formData.mealRelation === opt.value ? 'selected' : ''}`}
                  onClick={() => handleChange({ target: { name: 'mealRelation', value: opt.value } })}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="step-nav">
              <button className="btn btn-outline" onClick={handleBack}>Back</button>
              <button className="btn btn-primary next-btn" onClick={handleNext}>
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Step 4 – Date Range */}
        {step === 4 && (
          <div className="step-card">
            <h2>4. How long should you take it?</h2>
            <p className="date-hint">Select the start and end dates for this course</p>

            <div className="date-range">
              <div className="date-field">
                <label>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="date-field">
                <label>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  min={formData.startDate || new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="step-nav">
              <button className="btn btn-outline" onClick={handleBack}>Back</button>
              <button className="btn btn-primary next-btn" onClick={handleNext}>
                Review & Save →
              </button>
            </div>
          </div>
        )}

        {/* Step 5 – Preview & Confirm */}
        {step === 5 && (
          <div className="step-card confirm-card">
            <h2>Review Your Medicine Schedule</h2>

            <div className="preview-summary">
              <div className="preview-item">
                <strong>Medicine:</strong> {formData.medicineName || '—'}
                <div className="preview-dosage">{formData.dosage || 'Dosage not specified'}</div>
              </div>

              <div className="preview-item">
                <strong>Time:</strong> {timeOptions.find(o => o.value === formData.timeOfDay)?.label || '—'}
              </div>

              <div className="preview-item">
                <strong>Meal relation:</strong> {formData.mealRelation ? `${formData.mealRelation} meal` : '—'}
              </div>

              <div className="preview-item">
                <strong>Duration:</strong>
                {formData.startDate && formData.endDate
                  ? `${new Date(formData.startDate).toLocaleDateString()} → ${new Date(formData.endDate).toLocaleDateString()}`
                  : '—'}
              </div>

              {formData.notes && (
                <div className="preview-notes">
                  <strong>Notes:</strong> {formData.notes}
                </div>
              )}
            </div>

            <div className="confirm-actions">
              <button className="btn btn-outline" onClick={handleBack}>Edit</button>
              <button className="btn btn-primary save-btn" onClick={handleSubmit}>
                Save Schedule
              </button>
            </div>

            <p className="safety-note">
              ℹ️ Always follow your doctor's instructions. This is a reminder tool, not medical advice.
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}