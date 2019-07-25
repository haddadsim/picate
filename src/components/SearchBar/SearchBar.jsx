import React from 'react';
import './SearchBar.css';

const createSearchBar = () => (
  <div className="SearchBar">
    <div className="SearchBar-fields">
      <input className="Search" placeholder="Search Images" />
    </div>
  </div>
);

class Searchbar extends React.Component {
  render() {
    return createSearchBar();
  }
}

export default Searchbar;
