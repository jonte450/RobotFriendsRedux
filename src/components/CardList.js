import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  if(robots !== undefined){
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}else {
  return <h1>Error</h1>
}
}

export default CardList;