import React from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { fetchPokemons } from "./store/slices/pokemonSlice";

export const App = () => {
  const pokemons = useAppSelector((state) => state.pokemon.pokemons);
  const isLoading = useAppSelector((state) => state.pokemon.isLoading);
  const isError = useAppSelector((state) => state.pokemon.isError);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  if (isLoading) {
    return <div>carregando...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};
