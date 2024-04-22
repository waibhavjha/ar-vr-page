// Footer.js
import React from 'react';
import '../style.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Letzstepin</h3>
          <p>Join Our 360° Network Today</p>
          <p>
            LetzStepIn advantage unfolds with a plethora of benefits, discounts, and rewards accompanying every online and offline purchase. Our vision is grand – to evolve into the world's most trusted, valued, secure, and advanced e-commerce 360° virtual marketplace. We aspire to be accessible hassle-free to individuals globally, anywhere, anytime. Our platform is designed for those tech-savvy and internet-enabled individuals seeking ease and efficiency.
          </p>
        </div>
        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/refer-earn">Refer & earn</a></li>
            <li><a href="/terms">Terms of service</a></li>
            <li><a href="/privacy">Privacy policy</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Food Delivery</li>
            <li>Shopping</li>
            <li>Healthcare</li>
            <li>Real-estate</li>
            <li>Fitness</li>
            <li>Education</li>
            <li>Automobile</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright Letzstepin™</p>
        <p>All Rights Reserved ® 2020-2024</p>
      </div>
    </footer>
  );
};

export default Footer;
