import axios from "axios";
import { pokemonMapperList } from "../mappers/pokemon";

export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export type GetPokemonResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
};

export const getPokemon = async () => {
  const { data } = await pokeApi.get<GetPokemonResponse>("pokemon");
  return pokemonMapperList(data);
};
