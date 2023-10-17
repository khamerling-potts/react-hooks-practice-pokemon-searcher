import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: "",
    },
  });

  function handleInputChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    if (key === "frontUrl") {
      setNewPokemon({
        ...newPokemon,
        sprites: { ...newPokemon.sprites, front: value },
      });
    } else if (key === "backUrl") {
      setNewPokemon({
        ...newPokemon,
        sprites: { ...newPokemon.sprites, back: value },
      });
    } else {
      setNewPokemon({ ...newPokemon, [key]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newPokemon),
    };
    fetch("http://localhost:3001/pokemon", configObj)
      .then((r) => r.json())
      .then((pokemon) => onAddPokemon(pokemon));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={newPokemon.name}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={newPokemon.hp}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.sprites.front}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.sprites.back}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
