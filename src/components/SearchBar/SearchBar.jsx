import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  return (
    <form>
      <input className="Search" placeholder="Search Images" />
      <button type="submit" id="submit" className="search-button">
        <i className="icon">search</i>
      </button>
    </form>
  );
};
export default SearchBar;
