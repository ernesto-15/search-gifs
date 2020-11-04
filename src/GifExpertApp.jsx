import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((category, key) => (
        <GifGrid key={category} category={category} />
        // <li key={key}>{category}</li>
      ))}
    </>
  );
};

export default GifExpertApp;
