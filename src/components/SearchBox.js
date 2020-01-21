import React from 'react';

const SearchBox = () => {

      //const filteredRobots = robots.filter(robot => {
      //return robot.name.toLowerCase().includes(searchField.toLowerCase());
    //})

  return (
    <div className='pa2'>
     <h1>Search a robot by name</h1>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
      />
    </div>
  );
}

export default SearchBox;