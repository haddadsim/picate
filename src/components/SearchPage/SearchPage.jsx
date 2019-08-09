import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageList from '../ImageList/ImageList';
import './SearchPage.css';
import fetchImages from '../../utils/index';

const SearchPage = () => {
  const [searchText, setSearchTerm] = useState('');
  const [image, setImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [nextPageIndex, setNextPageIndex] = useState(1);

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getImages = () => {
    fetchImages(nextPageIndex, searchText)
      .then((data) => {
        setImage(data.data.results);
        setIsLoaded(false);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setNextPageIndex(1);
    getImages();
    setIsLoaded(true);
  };

  const onClickHandler = () => {
    setIsNext(true);
    setNextPageIndex(parseInt(nextPageIndex + 1, 10));
  };

  if (isNext === true) {
    fetchImages(nextPageIndex, searchText)
      .then((data) => {
        const result = data.data.results;
        setImage(image.concat(result));
        setIsLoaded(false);
      });
    setIsNext(false);
  }
  return (
    <React.Fragment>
      <SearchBar
        className="search-bar"
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchText={searchText}
      />

      <div className="image-container">
        {image && <ImageList image={image} isLoaded={isLoaded} />}
      </div>
      <button
        type="submit"
        onClick={onClickHandler}
        value="next"
      />
    </React.Fragment>

  );
};
export default SearchPage;
