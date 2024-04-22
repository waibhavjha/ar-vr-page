import React, { useState } from 'react';
import '../style.css'; // Import the CSS file for Search component styling

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Here you can implement your search logic
    // For this example, let's assume we have some dummy data
    const dummyData = [
      { id: 1, category: 'Banquet', name: 'Banquet Hall A' },
      { id: 2, category: 'Hotel Room', name: 'Hotel Room 101' },
      { id: 3, category: 'Fitness Gym', name: 'Fitness Gym X' },
      { id: 4, category: 'Real-estate', name: 'Property 123' },
      { id: 5, category: 'Pre-School', name: 'ABC Pre-School' }
    ];

    // Filter the dummy data based on the search term and update searchResults state
    const results = dummyData.filter(item =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="search-container">
      <div className="search-content">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select>
        <option value="">All Categories</option>
        <option value="resorts">Resorts</option>
        <option value="co-working">Co-working</option>
        <option value="co-living">Co-Living</option>
        <option value="real-estate">Real-Estate</option>
        <option value="gym">Gym</option>
        <option value="restaurants">Restaurants</option>
        <option value="clinics">Clinics</option>
        <option value="pre-school">Pre-school</option>
        <option value="college">College</option>
        <option value="school">School</option>
        <option value="hotel-rooms">Hotel rooms</option>
       </select>
        
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      <div>
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>
              <strong>{result.category}</strong>: {result.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
