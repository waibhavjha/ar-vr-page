import React from 'react';
import Search from './Search'; // Import the Search component
import '../style.css'; // Import the CSS file for Navbar component styling

const Navbar = () => {
  // Dummy data for location dropdown options
  const locations = ['Bangalore', 'Pune', 'Gurugram', 'Delhi', 'Chandigarh', 'Hyderabad'];

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="../images/logo.png" alt="Logo" />
      </div>

      {/* Search component */}
      <Search />

      {/* Location dropdown */}
      <div className="navbar__location">
        <select>
          <option disabled selected value="">Location</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* Sign in/out button */}
      <button className="navbar__button">Sign In/Out</button>

      {/* Cart button */}
      <button className="navbar__button">Cart</button>

      {/* Wishlist button */}
      <button className="navbar__button">Wishlist</button>

      {/* Contact button */}
      <button className="navbar__button">Contact</button>
    </nav>
  );
};

export default Navbar;
