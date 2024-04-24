import React from 'react';
import '../style.css'; // Import CSS for styling

const SimilarProperties = () => {
  // Define property data
  const properties = [
    { id: 1, imageUrl: "../images/prp-image-1.avif", name: "We Work", type: "Coworking", price: "Starting from ₹8,500/Seat" },
    { id: 2, imageUrl: "../images/prp-image-2.avif", name: "Spring House", type: "Coworking", price: "Starting from ₹6,500/Seat" },
    { id: 3, imageUrl: "../images/prp-image-3.avif", name: "Employers Place", type: "Coworking", price: "Starting from ₹5,500/Seat" },
    { id: 4, imageUrl: "../images/prp-image-4.avif", name: "The Officers", type: "Coworking", price: "Starting from ₹6,500/Seat" }
  ];

  return (
    <div className="similar-properties">
      <h2>Similar Properties</h2>
      <div className="property-list">
        {properties.map(property => (
          <div key={property.id} className="property-card">
            <img src={property.imageUrl} alt={property.name} className="property-image" />
            <div className="property-details">
              <h3 className="property-name">{property.name}</h3>
              <p className="property-type">{property.type}</p>
              <p className="property-price">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;
