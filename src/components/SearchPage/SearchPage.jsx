import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import ImageList from '../ImageList/ImageList';
import './SearchPage.css';

const API_KEY = process.env.REACT_APP_ACCESS_KEY;

const SearchPage = () => {
  const [searchText, setSearchTerm] = useState('');
  const [image, setImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
        setIsLoaded(false);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchImages();
    setIsLoaded(true);
  };

  return (
    <div>
      <SearchBar
        className="search-bar"
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchText={searchText}
      />
      <div className="image-container">
        {image && <ImageList image={image} isLoaded={isLoaded} />}
      </div>
    </div>

  );
};
export default SearchPage;
