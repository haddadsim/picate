import React, { useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SearchBar from '../SearchBar/SearchBar';
import ImageList from '../ImageList/ImageList';
import './SearchPage.css';
import fetchImages from '../../utils/index';

const SearchPage = () => {
  const [searchText, setSearchTerm] = useState('');
  const [image, setImage] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [nextPageIndex, setNextPageIndex] = useState(1);
  const [isHidden, setIsHidden] = useState(true);

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getImages = () => {
    fetchImages(nextPageIndex, searchText)
      .then((data) => {
        const result = data.data.results;
        if (result.length > 23) {
          setIsHidden(false);
        } else {
          setIsHidden(true);
        }
        setImage(result);
        setIsLoaded(false);
      });
  };

  const onSubmitHandler = (e) => {
    setImage([]);
    e.preventDefault();
    setNextPageIndex(1);
    getImages();
    setIsLoaded(true);
  };

  const onClickHandling = () => {
    setIsNext(true);
    setNextPageIndex(parseInt(nextPageIndex + 1, 10));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isNext === true) {
    fetchImages(nextPageIndex, searchText)
      .then((data) => {
        const result = data.data.results;
        setImage(image.concat(result));
        setIsLoaded(false);
        if (result.length < 24) {
          setIsHidden(true);
        }
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
        {image && (
        <ImageList
          image={image}
          isLoaded={isLoaded}
          isHidden={isHidden}
          onClickHandling={onClickHandling}
          isNext={isNext}
        />
        )}

      </div>

      <ArrowUpwardIcon onClick={scrollToTop} />

    </React.Fragment>

  );
};

export default SearchPage;
