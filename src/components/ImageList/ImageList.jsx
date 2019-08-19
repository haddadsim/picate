/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import './ImageList.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Button from '@material-ui/core/Button';

const ImageList = ({
  image, isLoaded, isHidden, onClickHandling,
}) => {
  const [imageIndex, setImageIndex] = useState();
  const [isOpen, setIsOpen] = useState('false');
  const [scrollPosition, setScrollPosition] = useState(0);

  if (isLoaded) {
    return (
      <div className="spinner">
        <ReactLoading type="spin" color="blue" />
      </div>
    );
  }

  const onClickHandler = (e) => {
    setIsOpen(true);
    setImageIndex(parseInt((e.target.id), 10));
    setScrollPosition(window.pageYOffset);
  };

  const onCloseRequest = () => {
    setIsOpen(false);
    window.scrollTo(0, scrollPosition);
  };

  const imgs = image.map((img, index) => (
    <img
      id={index}
      key={img.id}
      src={img.urls.small}
      onClick={onClickHandler}
    />
  ));

  if (imgs.length === 0) {
    return (
      <p>No images</p>
    );
  }

  if (isOpen === true) {
    return (
      <Lightbox
        onCloseRequest={onCloseRequest}
        mainSrc={image[imageIndex].urls.regular}
        onMoveNextRequest={() => setImageIndex((imageIndex + 1) % image.length)}
        onMovePrevRequest={() => setImageIndex((imageIndex + image.length - 1) % image.length)}
        nextSrc={image[(imageIndex + 1) % image.length].urls.regular}
        prevSrc={image[(imageIndex + image.length - 1) % image.length].urls.regular}
        imageTitle={image[imageIndex].alt_description}
        imageCaption={`By ${image[imageIndex].user.name}`}

      />
    );
  }

  return (
    <React.Fragment>
      {imgs}
      <div className="show-button">
        {!isHidden && (
        <Button
          onClick={onClickHandling}
          variant="contained"
          component="span"

        >
          Show More
        </Button>
        ) }
      </div>
    </React.Fragment>

  );
};

export default ImageList;

