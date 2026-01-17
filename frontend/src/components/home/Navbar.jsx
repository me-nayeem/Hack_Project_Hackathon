import { useState, useEffect } from 'react';

const Navbar = () => {

    const [isLogin, setIsLogin] = useState(null);

   useEffect(() => {
      const checkAuth = async () => {
        try {
          const response = await fetch("/api/islogged", {
            credentials: "include", 
          });
  
          if (!response.ok) throw new Error("Not logged in");
  
          const data = await response.json();
          setIsLogin(data); 
        } catch (err) {
          console.log("User not authenticated → redirecting to home");
          setIsLogin('false');
        }
      };
  
      checkAuth();
    }, []);


  return (
    <>
      <nav className="Navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="heart-icon">ReLIFE</span>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#footer">Contact</a>
          </div>
          {isLogin === 'true' && <div className="auth-links">
            <button className="signin-btn" onClick={() => window.location.href = '/dashboard'}>Dashboard</button>
          </div>}
          {isLogin === 'false' && <div className="auth-links">
            <button className="signin-btn" onClick={() => {
              window.location.href = '/login'
            }}>Login</button>
            <button className="signin-btn" onClick={() => {
              window.location.href = '/signup'
            }}>Sign Up</button>
          </div>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
