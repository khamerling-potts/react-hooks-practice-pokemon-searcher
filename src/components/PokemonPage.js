import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((data) => setPokemons(data));
  }, []);

  function handleSearch(term) {
    setSearchTerm(term);
  }

  function handleAddPokemon(pokemon) {
    setPokemons([...pokemons, pokemon]);
  }

  const pokemonsToDisplay = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <br />
      <PokemonCollection pokemons={pokemonsToDisplay} />
    </Container>
  );
}

export default PokemonPage;
