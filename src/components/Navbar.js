import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="../images/logo.png" alt="Logo" />
      </div>
      <ul className="navbar__links">
        <li className="navbar__item">
          <a href="/" className="navbar__link">Home</a>
        </li>
        {/* Add more links here if needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
