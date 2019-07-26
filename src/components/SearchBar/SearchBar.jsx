import React from 'react';
import './SearchBar.css';

const createSearchBar = () => (
  <input className="Search" placeholder="Search Images" />
);

class Searchbar extends React.Component {
  render() {
    return createSearchBar();
  }
}

export default Searchbar;
