// Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/auth.api";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); 
    navigate("/login"); 
  };

  return (
    <nav className="Navbar" role="navigation" aria-label="Main navigation">
      <div className="Navbar-brand">
        <span
          className="logo"
          aria-hidden="true"
          onClick={() => (window.location.href = "/")}
        >
          ReLIFE
        </span>
      </div>

      <ul className="nav-links">
        {[
          "Dashboard",
          "Feed",
          "Challenge",
          "Consultant",
          "AskAI",
          "Learn",
          "Store",
        ].map((item) => (
          <li key={item}>
            <a
              href={`/${item.toLowerCase()}`}
              className={item === "Dashboard" ? "active" : ""}
              aria-current={item === "Dashboard" ? "page" : undefined}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        href="/profile"
      >
        <img
          src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png"
          alt="User avatar"
          className="avatar"
        />
        <div></div>
        {open && (
          <div className="dropdown">
            <a href="/profile">Profile</a>
            <a href="#">Settings</a>
            <a onClick={handleLogout} style={{ cursor: "pointer" }}>
              Logout
            </a>
          </div>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
