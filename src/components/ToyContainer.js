import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonateClick, onLikeClick }) {
  const toysArray = toys.map(toy => {
    return (
      <ToyCard 
        key={toy.id} 
        toy={toy} 
        onDonateClick={onDonateClick} 
        onLikeClick={onLikeClick} 
      />
    )
  })

  return (
    <div id="toy-collection">
      {toysArray}
    </div>
  );
}

export default ToyContainer;
