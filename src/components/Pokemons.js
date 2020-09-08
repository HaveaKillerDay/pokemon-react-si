import React, { useContext } from "react";
import PokemonItem from "./PokemonItem";

const Pokemons = (props) => {
  return props.pokemons.map((pokemon) => (
    <PokemonItem
      key={pokemon.id}
      pokemonurl={pokemon.url}
      name={pokemon.name}
      pokemon={pokemon}
    ></PokemonItem>
  ));
};

export default Pokemons;
