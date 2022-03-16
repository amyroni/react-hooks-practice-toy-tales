import React from "react";

function ToyCard({ toy, onDonateClick, onLikeClick }) {
  function handleDonate() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
      .then(() => onDonateClick(toy.id))
  }

  function handleClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({likes: toy.likes + 1})
    })
    .then(response => response.json())
    .then(updatedToy => onLikeClick(updatedToy.id, updatedToy.likes))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
