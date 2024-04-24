import React, { useState } from 'react';
import '../style.css';

const BanquetListingPage = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const handleBuyNow = () => {
    // Logic for Buy Now button action
  };

  const handleContact = () => {
    setShowEnquiryForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission and sending email
    // After successful submission
    setShowEnquiryForm(false);
    setShowThankYouPopup(true);
  };

  const handleCloseThankYouPopup = () => {
    setShowThankYouPopup(false);
  };

  return (
    <div className="listing-page">
      <h1>Banquet Hall Booking Listing</h1>
      <button onClick={handleBuyNow}>Buy Now</button>
      <button onClick={handleContact}>Contact</button>

      {showEnquiryForm && (
        <div className="enquiry-form">
          <h2>Enquiry Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {showThankYouPopup && (
        <div className="thank-you-popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseThankYouPopup}>×</span>
            <p>Our Business Growth Team will get in touch shortly. Thank you for your valuable inquiry.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BanquetListingPage;
