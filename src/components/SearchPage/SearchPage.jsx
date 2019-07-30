import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';

const API_KEY = process.env.REACT_APP_ACCESS_KEY;

const SearchPage = () => {
  const [searchText, setSearchTerm] = useState('');

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchImages = () => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: searchText },
      headers: {
        Authorization: API_KEY,
      },
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchImages();
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
