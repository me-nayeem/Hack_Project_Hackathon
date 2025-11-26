const Navbar = () => {
  return (
    <>
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
          <div className="auth-links">
            <button className="signin-btn">Login</button>
            <button className="signin-btn">Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
