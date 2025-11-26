import { useState, useEffect } from "react";

const HeroSection = () => {
    const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
                Get Started
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
    </>
  );
}

export default HeroSection;