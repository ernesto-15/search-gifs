import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = ['Rick and Morty'] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      {categories.map((category, key) => (
        <GifGrid key={category} category={category} />
        // <li key={key}>{category}</li>
      ))}
    </>
  );
};

export default GifExpertApp;
