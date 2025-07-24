import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
  
function Navbar() {
  const location = useLocation();
  
  // Function to check if the current route matches the nav item
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className={`nav-link ${isActive('/')}`}>
          Home
        </Link>
        <Link to="/about" className={`nav-link ${isActive('/about')}`}>
          About
        </Link>
        <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>
          Projects
        </Link>
        <Link to="/skills" className={`nav-link ${isActive('/skills')}`}>
          Skills
        </Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
          Contact
        </Link>
      </div>
      <div className="navbar-name">𝚂𝚊𝚌𝚑𝚒𝚗 * 𝚂𝚒𝚗𝚐𝚑</div>
    </nav>
  );
}

export default Navbar;
