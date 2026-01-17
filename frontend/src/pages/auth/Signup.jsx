// src/pages/Auth/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Signup.css";

import { FetchSignUpDataPost } from "../../services/auth.api";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    else if (formData.firstName.length < 2) newErrors.firstName = "First Name must be at least 2 characters";

    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    else if (formData.lastName.length < 2) newErrors.lastName = "Last Name must be at least 2 characters";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password))
      newErrors.password = "Password must contain uppercase, lowercase, and number";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMessage("");
  setSuccessMessage("");

  if (!validateForm()) return;

  setIsLoading(true);

  try {
    const payload = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    };

    const response = await FetchSignUpDataPost(payload);
    if (response ?.success || response.status === 201) {
      setSuccessMessage("Account created successfully! Redirecting...");
      setTimeout(() => navigate("/login"), 1800);
    } else {
      setErrorMessage(response?.message || "Something went wrong");
    }
  } catch (err) {
    const errorMsg =
      err.response?.data?.message ||
      err.response?.data?.error ||
      err.message ||
      "Failed to connect to the server. Please try again later.";

    setErrorMessage(errorMsg);
  } finally {
    setIsLoading(false);
  }
};



  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Branding Section */}
        <div className="signup-branding">
          <div className="signup-branding-content">
            <div className="signup-logo">
              <div className="signup-logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h1>HealthHub</h1>
            </div>
            <h2>Start Your Journey!</h2>
            <p>Join thousands transforming their health and wellness.</p>
            <div className="signup-stats">
              <div className="signup-stat">
                <h3>50K+</h3>
                <p>Active Users</p>
              </div>
              <div className="signup-stat">
                <h3>100K+</h3>
                <p>Challenges Completed</p>
              </div>
              <div className="signup-stat">
                <h3>4.8★</h3>
                <p>User Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="signup-form-section">
          <div className="signup-form-card">
            <Link to="/" className="signup-back-link">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <div className="signup-header">
              <h2>Create Account</h2>
              <p>Sign up to begin your health journey</p>
            </div>

            {errorMessage && <div className="signup-alert signup-alert-error">{errorMessage}</div>}
            {successMessage && <div className="signup-alert signup-alert-success">{successMessage}</div>}

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="signup-name-row">
                <div className="signup-field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={errors.firstName ? "signup-input-error" : ""}
                    disabled={isLoading}
                  />
                  {errors.firstName && <span className="signup-error">{errors.firstName}</span>}
                </div>
                <div className="signup-field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={errors.lastName ? "signup-input-error" : ""}
                    disabled={isLoading}
                  />
                  {errors.lastName && <span className="signup-error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="signup-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={errors.email ? "signup-input-error" : ""}
                  disabled={isLoading}
                />
                {errors.email && <span className="signup-error">{errors.email}</span>}
              </div>

              <div className="signup-field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className={errors.password ? "signup-input-error" : ""}
                  disabled={isLoading}
                />
                {errors.password && <span className="signup-error">{errors.password}</span>}
                <p className="signup-hint">Uppercase, lowercase, and number required</p>
              </div>

              <div className="signup-field">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  className={errors.confirmPassword ? "signup-input-error" : ""}
                  disabled={isLoading}
                />
                {errors.confirmPassword && <span className="signup-error">{errors.confirmPassword}</span>}
              </div>

              <div className="signup-checkbox">
                <label className="signup-checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <span>
                    I agree to the <Link to="/terms" className="signup-link">Terms of Service</Link> and{" "}
                    <Link to="/privacy" className="signup-link">Privacy Policy</Link>
                  </span>
                </label>
                {errors.agreeTerms && <span className="signup-error">{errors.agreeTerms}</span>}
              </div>

              <button type="submit" className="signup-submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="signup-spinner"></span>
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <div className="signup-divider">
              <span>or continue with</span>
            </div>

            <div className="signup-social">
              <button type="button" className="signup-social-btn signup-google" disabled={isLoading}>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
            </div>

            <p className="signup-footer-text">
              Already have an account? <Link to="/login" className="signup-link-bold">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;