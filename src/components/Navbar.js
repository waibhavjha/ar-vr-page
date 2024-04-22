import React, { useState } from 'react';
import '../style.css'; // Import your CSS file for styling

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can add logic here to toggle dark mode for the entire page
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="logo">
        <img src="../images/logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#signin">Sign In</a></li>
      </ul>
      <div className="mode-toggle">
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkModeToggle" />
      </div>
    </nav>
  );
};

export default Navbar;
