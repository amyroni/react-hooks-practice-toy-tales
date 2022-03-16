import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(response => response.json())
      .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleSubmitToyForm(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDonateClick(id) {
    const newToys = toys.filter(toy => {
      return toy.id !== id
    })
    setToys(newToys);
  }

  function handleLikeClick(id, newLikes) {
    const newToys = toys.map(toy => {
      if (toy.id === id) {
        return {...toy, likes: newLikes}
      } else return toy
    })
    setToys(newToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmitToyForm={handleSubmitToyForm} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys} 
        onDonateClick={handleDonateClick} 
        onLikeClick={handleLikeClick} 
      />
    </>
  );
}

export default App;
