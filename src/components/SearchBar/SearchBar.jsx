/* eslint-disable react/prop-types */
import React from 'react';
import './SearchBar.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const SearchBar = ({ onSubmitHandler, searchText, onInputChange }) => (
  <form onSubmit={onSubmitHandler} className="search-form">
    <Input
      type="search"
      className="Search"
      placeholder="Search Images"
      value={searchText}
      onChange={onInputChange}
    />
    <Button
      type="submit"
      className="search-button"
      color="primary"
      variant="contained"
    >
      <i className="icon">search</i>
    </Button>
  </form>
);
export default SearchBar;
