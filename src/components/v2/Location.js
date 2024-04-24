import React from 'react';

const PuneMap = () => {
  return (
    <div>
      <h2>Location</h2>
      <iframe
        title="Pune Map"
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=73.73664855957031%2C18.44114602966856%2C73.99482727050781%2C18.62533115423192&layer=mapnik`}
      ></iframe>
    </div>
  );
};

export default PuneMap;
