/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

const ImageList = ({ image }) => {
  const imgs = image.map(img => (
    <img
      key={img.id}
      src={img.urls.regular}
    />
  ));
  return (
    <div>
      {' '}
      {imgs}
      {' '}
    </div>
  );
};

export default ImageList;

