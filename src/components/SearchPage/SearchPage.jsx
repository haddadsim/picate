import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const SearchPage = () => {
  const [searchText, setSearchTerm] = useState('');

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <SearchBar
      onSubmitHandler={onSubmitHandler}
      onInputChange={onInputChange}
      searchText={searchText}
    />
  );
};
export default SearchPage;
