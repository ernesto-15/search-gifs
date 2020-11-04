import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/AddCategory.css';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((prevCategories) => [inputValue, ...prevCategories]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-category"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for any gif"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
