import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
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
              <span><FaTwitter /></span> <span><FaLinkedin /></span> <span><FaInstagramSquare /></span>
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

export default Footer;