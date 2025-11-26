import './App.css';

import React, { useState, useEffect } from 'react';

const features = [
  { icon: "Trophy", title: "Leaderboards", desc: "Compete globally and see who's the healthiest" },
  { icon: "User Level", title: "User Levels", desc: "Level up as you achieve health milestones" },
  { icon: "Coins", title: "Token Rewards", desc: "Earn & spend tokens on premium features" },
  { icon: "Target", title: "Daily Challenges", desc: "Fun science-backed health challenges" },
  { icon: "Community", title: "Community", desc: "Connect, share progress, motivate each other" },
  { icon: "Doctor", title: "Consult Doctors", desc: "Video/audio calls with verified doctors" },
  { icon: "AI", title: "Ask AI", desc: "24/7 AI answers your health questions instantly" },
  { icon: "Personalized", title: "Best Fit Plans", desc: "Workouts & diets tailored just for you" },
];

const testimonials = [
  { name: "Amit Sharma", text: "Lost 18kg in 5 months thanks to challenges!", stars: 5 },
  { name: "Priya Verma", text: "The AI detected my vitamin deficiency early!", stars: 5 },
  { name: "Rahul Mehta", text: "Finally a health app that feels like a game!", stars: 5 },
];

export default function App() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="heart-icon">Heart</span> HealthHub
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#footer">Contact</a>
          </div>
          <button className="signin-btn">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Your Health,<br />
              <span className="highlight">Reimagined</span>
            </h1>
            <p className="hero-text">
              Track, compete, consult, and thrive. The all-in-one health platform that makes wellness fun and rewarding.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Get Started Free <span className="arrow">Right Arrow</span>
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          {/* Animated Moving Image/Panel */}
          <div className="hero-image">
            <div
              className="floating-panel"
              style={{ transform: `translateX(${scrollOffset * 0.08}px)` }}
            >
              <div className="stat-card">98% Satisfaction</div>
              <div className="stat-card">50K+ Users</div>
              <div className="stat-card">1.2M Challenges Won</div>
              <div className="stat-card">24/7 AI Assistant</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>How HealthHub Works</h2>
          <p className="section-subtitle">
            We combine gamification, AI insights, and real doctors to make health engaging and effective.
          </p>
          <div className="about-grid">
            <div className="about-card">
              <div className="icon-circle">Target</div>
              <h3>Set Goals</h3>
              <p>Personalized targets based on your body and lifestyle</p>
            </div>
            <div className="about-card">
              <div className="icon-circle">Trophy</div>
              <h3>Compete & Earn</h3>
              <p>Win challenges, climb leaderboards, earn tokens</p>
            </div>
            <div className="about-card">
              <div className="icon-circle">Doctor</div>
              <h3>Get Expert Help</h3>
              <p>Consult real doctors or ask AI instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Powerful Features for Your Health Journey</h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Feedback Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Loved by Thousands</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="quote">"{t.text}"</p>
                <p className="author">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="heart-icon">Heart</span> HealthHub
            </div>
            <p>Your partner in building a healthier tomorrow.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>✉️ hello@healthhub.app</p>
            <p>Phone +91 98765 43210</p>
            <p>Location Bangalore, India</p>
            <div className="social-icons">
              <span>Twitter</span> <span>LinkedIn</span> <span>Instagram</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 HealthHub. All rights reserved.
        </div>
      </footer>
    </>
  );
}
