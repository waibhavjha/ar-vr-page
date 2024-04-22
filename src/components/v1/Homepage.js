import React from 'react';
import '../style.css'; // Import CSS for styling

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to our AR/VR Experience</h1>
      <div className="image-container">
        <div className="image-card">
          <img src="../images/ar.jpg" alt="AR" />
          <div className="overlay">
            <h2>Augmented Reality</h2>
            <p>Discover the world with AR technology.</p>
          </div>
        </div>
        <div className="image-card">
          <img src="../images/vr.jpg" alt="VR" />
          <div className="overlay">
            <h2>Virtual Reality</h2>
            <p>Immerse yourself in virtual environments.</p>
          </div>
        </div>
        <div className="image-card">
          <img src="../images/vr360.jpg" alt="360 VR" />
          <div className="overlay">
            <h2>360 VR</h2>
            <p>Explore panoramic views in 360 degrees.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
