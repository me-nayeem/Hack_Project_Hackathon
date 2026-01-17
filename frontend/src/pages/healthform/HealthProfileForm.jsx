import { useState } from "react";
import { saveHealthProfile } from "../../services/healthForm.api";
import { useNavigate } from "react-router-dom";


import "./HealthProfileForm.css";

const HealthProfile = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodGroup: "",
    activityLevel: "",
    chronicDiseases: "",
    medications: "",
    heartRate: "",
    sleepHours: "",
    stepsGoal: "",
    deviceType: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await saveHealthProfile(formData);
    alert("Health profile saved successfully!");
    navigate("/dashboard"); 
  } catch (error) {
    alert("Failed to save health profile");
  }
};


  return (
    <div className="health-profile-container">
      <div className="card">
        <h1 className="page-title">Health Profile & Device Setup</h1>

        <form onSubmit={handleSubmit} className="health-form">
          <div className="form-grid">
            {/* Personal Info */}
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="25"
                min="1"
                max="120"
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="height">Height (cm)</label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="170"
                step="0.1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="68"
                step="0.1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            {/* Lifestyle */}
            <div className="form-group full-width">
              <label>Activity Level</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="activityLevel"
                    value="Sedentary"
                    checked={formData.activityLevel === "Sedentary"}
                    onChange={handleChange}
                  />
                  Sedentary
                </label>
                <label>
                  <input
                    type="radio"
                    name="activityLevel"
                    value="Moderate"
                    checked={formData.activityLevel === "Moderate"}
                    onChange={handleChange}
                  />
                  Moderate
                </label>
                <label>
                  <input
                    type="radio"
                    name="activityLevel"
                    value="Active"
                    checked={formData.activityLevel === "Active"}
                    onChange={handleChange}
                  />
                  Active
                </label>
              </div>
            </div>

            {/* Health Details */}
            <div className="form-group full-width">
              <label htmlFor="chronicDiseases">Chronic Diseases (if any)</label>
              <textarea
                id="chronicDiseases"
                name="chronicDiseases"
                value={formData.chronicDiseases}
                onChange={handleChange}
                placeholder="e.g. Hypertension, Diabetes, Asthma..."
                rows="2"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="medications">Current Medications</label>
              <textarea
                id="medications"
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                placeholder="e.g. Metformin 500mg, Amlodipine 5mg..."
                rows="2"
              />
            </div>

            {/* Metrics */}
            <div className="form-group">
              <label htmlFor="heartRate">Resting Heart Rate (bpm)</label>
              <input
                type="number"
                id="heartRate"
                name="heartRate"
                value={formData.heartRate}
                onChange={handleChange}
                placeholder="68"
              />
            </div>

            <div className="form-group">
              <label htmlFor="sleepHours">Avg Sleep (hours/day)</label>
              <input
                type="number"
                id="sleepHours"
                name="sleepHours"
                value={formData.sleepHours}
                onChange={handleChange}
                placeholder="7.5"
                step="0.1"
                min="0"
                max="24"
              />
            </div>

            <div className="form-group">
              <label htmlFor="stepsGoal">Daily Steps Goal</label>
              <input
                type="number"
                id="stepsGoal"
                name="stepsGoal"
                value={formData.stepsGoal}
                onChange={handleChange}
                placeholder="8000"
              />
            </div>

            {/* Device */}
            <div className="form-group full-width">
              <label>Connected Device</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="deviceType"
                    value="Smart Watch"
                    checked={formData.deviceType === "Smart Watch"}
                    onChange={handleChange}
                  />
                  Smart Watch
                </label>
                <label>
                  <input
                    type="radio"
                    name="deviceType"
                    value="Fitness Band"
                    checked={formData.deviceType === "Fitness Band"}
                    onChange={handleChange}
                  />
                  Fitness Band
                </label>
                <label>
                  <input
                    type="radio"
                    name="deviceType"
                    value="Mobile Sensors"
                    checked={formData.deviceType === "Mobile Sensors"}
                    onChange={handleChange}
                  />
                  Mobile Sensors
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthProfile;
