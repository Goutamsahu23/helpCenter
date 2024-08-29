import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import CardsGrid from './components/CardsGrid';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Navbar />
      <Search onSearch={handleSearch} />
      <CardsGrid searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default App;
