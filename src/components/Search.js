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
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      <div>
        <h2>Search Results</h2>
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
