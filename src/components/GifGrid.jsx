import React from 'react';
import GifGridItem from './GifGridItem';
import './styles/GifGrid.css';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  if (loading && !data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h3>{category}</h3>
      <div className="card-grid">
        {data.map((image) => (
          <GifGridItem {...image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
