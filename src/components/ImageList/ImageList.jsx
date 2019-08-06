/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import './ImageList.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ImageList = ({ image, isLoaded }) => {
  const [imageIndex, setImageIndex] = useState();
  const [isOpen, setIsOpen] = useState('false');

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
        onCloseRequest={() => setIsOpen(false)}
        mainSrc={image[imageIndex].urls.regular}
        onMoveNextRequest={() => setImageIndex((imageIndex + 1) % image.length)}
        onMovePrevRequest={() => setImageIndex((imageIndex + image.length - 1) % image.length)}
        nextSrc={image[(imageIndex + 1) % image.length].urls.regular}
        prevSrc={image[(imageIndex + image.length - 1) % image.length].urls.regular}
      />
    );
  }

  return (
    <React.Fragment>
      {imgs}
    </React.Fragment>
  );
};

export default ImageList;

