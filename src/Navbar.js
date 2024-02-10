
import React, { useState } from 'react';
import './styles.css'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#About">About Us</a>
          <a href="#Contact">Contact Us</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}