import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };
    return (
        <div className="search-section">
            <h1>How can we help?</h1>
            <input type="text"
                value={query}
                onChange={handleChange} placeholder="Search" className="search-bar" />
        </div>
    );
};

export default Search;
