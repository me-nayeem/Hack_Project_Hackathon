const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <h2>How HealthHub Works</h2>
          <p className="section-subtitle">
            We combine gamification, AI insights, and real doctors to make
            health engaging and effective.
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
    </>
  );
};

export default About;
