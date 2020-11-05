import React, { useEffect } from 'react';
import GifGridItem from './GifGridItem';
import './styles/GifGrid.css';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (loading && !data) {
    return (
      <p className="loading animate__animated animate__heartBeat animate__infinite"></p>
    );
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
