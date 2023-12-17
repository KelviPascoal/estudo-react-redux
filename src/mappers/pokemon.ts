import { GetPokemonResponse } from "../service/api";

export function pokemonMapperList(data: GetPokemonResponse) {
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url,
    name: pokemon.name,
  }));
  return pokemons;
}
