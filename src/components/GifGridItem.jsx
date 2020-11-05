import React from 'react';
import './styles/GifGridItem.css';

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
    </div>
  );
};

export default GifGridItem;
