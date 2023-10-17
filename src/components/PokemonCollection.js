import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const cardArray = pokemons.map((pokemon) => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} />
  ));

  return <Card.Group itemsPerRow={6}>{cardArray}</Card.Group>;
}

export default PokemonCollection;
