import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import './styles/GifGrid.css';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  // if (loading && !data) {
  //   return (
  //     <p className="loading animate__animated animate__heartBeat animate__infinite"></p>
  //   );
  // }

  return (
    <div className="container">
      <h3>{category}</h3>
      {loading && (
        <p className="loading animate__animated animate__heartBeat animate__infinite"></p>
      )}
      <div className="card-grid">
        {data.map((image) => (
          <GifGridItem {...image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
