import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import ImageList from '../ImageList/ImageList';

const API_KEY = process.env.REACT_APP_ACCESS_KEY;

const SearchPage = () => {
  const [searchText, setSearchTerm] = useState('');
  const [image, setImage] = useState([]);

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchImages = () => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: searchText },
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((data) => {
        setImage(data.data.results);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchImages();
  };

  return (
    <div>
      <SearchBar
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchText={searchText}
      />
      <ImageList image={image} />
    </div>

  );
};
export default SearchPage;
