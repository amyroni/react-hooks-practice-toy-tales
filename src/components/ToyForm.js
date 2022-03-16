import React, { useState } from "react";

function ToyForm({ onSubmitToyForm }) {
  const [toyName, setToyName] = useState("");
  const [toyImage, setToyImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newToyObj = {
      name: toyName,
      image: toyImage,
      likes: 0
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToyObj)
    })
      .then(response => response.json())
      .then(toy => {
        onSubmitToyForm(toy);
        setToyName("");
        setToyImage("");
      })
  }

  function handleChangeName(event) {
    setToyName(event.target.value);
  }

  function handleChangeImage(event) {
    setToyImage(event.target.value);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(event) => handleSubmit(event)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(event) => handleChangeName(event)}
          value={toyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(event) => handleChangeImage(event)}
          value={toyImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
