/* eslint-disable react/prop-types */
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSubmitHandler, searchText, onInputChange }) => (
  <form onSubmit={onSubmitHandler}>
    <input
      type="search"
      className="Search"
      placeholder="Search Images"
      value={searchText}
      onChange={onInputChange}
    />
    <button type="submit" className="search-button">
      <i className="icon">search</i>
    </button>
  </form>
);
export default SearchBar;
