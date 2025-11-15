import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className='navbar'>
      <div className="logo">Suraj Thakur</div>

      {/* Hamburger Button */}
      <div className="menu-icon" onClick={toggleMenu}>
        
      </div>

      {/* Nav Links */}
      <ul className={mobileMenu ? "nav-links-mobile" : "nav-links"}>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="achievements" smooth={true} duration={500}>Achievements</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
