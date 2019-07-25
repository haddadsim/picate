import React from 'react';

const createSearchBar = () => (
  <div className="SearchBar">
    <div className="SearchBar-fields">
      <input placeholder="Search Images" />
    </div>
  </div>
);

class Searchbar extends React.Component {
  render() {
    return createSearchBar();
  }
}

export default Searchbar;
