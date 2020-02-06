import React from 'react';
import Card from './Card';

const CardList = ({filteredRobots}) => {
  if(filteredRobots !== undefined){
  return (
    <div>
      {
        filteredRobots.map((user, i) => {
          return (
            
            <Card
              key={i}
              id={filteredRobots[i].id}
              name={filteredRobots[i].name}
              email={filteredRobots[i].email}
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