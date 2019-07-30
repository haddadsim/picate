import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
  <form>
    <input type="search" className="Search" placeholder="Search Images" />
    <button type="submit" className="search-button">
      <i className="icon">search</i>
    </button>
  </form>
);
export default SearchBar;
