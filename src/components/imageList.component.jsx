import React from 'react';
import ImageCard from './imageCard';
import './imageList.css';
const ImageList = ({ images }) => {
  console.log(images);
  const imagesList = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className='image_list'>{imagesList}</div>;
};

export default ImageList;
