import React from 'react';
const SearchBox = ({ label, onFormSubmit, placeholder, inputVal, onInputChange }) => {
  return (
    <div className='ui segment'>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label htmlFor='in'>{label}</label>
          <input
            name='input'
            value={inputVal}
            placeholder={placeholder}
            onChange={onInputChange}
            id='in'
            type='text'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
