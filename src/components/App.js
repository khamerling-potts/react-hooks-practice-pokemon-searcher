import React from "react";
import PokemonPage from "./PokemonPage";

function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;

/*
App
  Pokemon page (set and hold pokemons state, initial fetch, search term state to create pokemons to display)
    Pokemon form (update pokemons state, form data state)
    Pokemon search (update search term state)
    Pokemon collection
      Pokemon card (front or back state)*/
