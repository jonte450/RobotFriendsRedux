import React from 'react';

const SearchBox = ({search,onSearchChange}) => {


  return (
    <div className='pa2'>
     <h1>Search a robot by name</h1>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        onChange={onSearchChange}
        placeholder='search robots'
      />
    </div>
  );
}

export default SearchBox;