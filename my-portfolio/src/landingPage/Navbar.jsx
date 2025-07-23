import React from 'react'
import '../styles/navbar.css';
  
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" textDecoration="none">About</a>
      <a href="#" textDecoration="none">Projects</a>
      <a href="#" textDecoration="none">Skills</a>
      <a href="#" textDecoration="none">Contact</a>
    </nav>
  );
}

export default Navbar;
