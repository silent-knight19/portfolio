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
      <Link to="/" className={isActive('/')}>
        Home
      </Link>
      <Link to="/about" className={isActive('/about')}>
        About
      </Link>
      <Link to="/projects" className={isActive('/projects')}>
        Projects
      </Link>
      <Link to="/skills" className={isActive('/skills')}>
        Skills
      </Link>
      <Link to="/contact" className={isActive('/contact')}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
