import React from 'react';
import './search-box-style.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        className='search'
        type='search field'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
