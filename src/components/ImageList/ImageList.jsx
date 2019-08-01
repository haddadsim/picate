/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactLoading from 'react-loading';
import './ImageList.css';

const ImageList = ({ image, isLoaded }) => {
  if (isLoaded) {
    return (
      <div className="spinner">
        <ReactLoading type="spin" color="blue" />
      </div>
    );
  }

  const imgs = image.map(img => (
    <img
      key={img.id}
      src={img.urls.small}
    />

  ));

  if (imgs.length === 0) {
    return (
      <p>No images</p>
    );
  }
  return (
    <React.Fragment>
      {imgs}
    </React.Fragment>
  );
};

export default ImageList;

