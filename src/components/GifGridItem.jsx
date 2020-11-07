import React from 'react';
import PropTypes from 'prop-types';
import './styles/GifGridItem.css';

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
