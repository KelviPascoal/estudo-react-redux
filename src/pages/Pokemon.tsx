import React from "react";
import { useAppSelector, useAppDispatch } from "../store";
import { fetchPokemons, removePokemon } from "../store/slices/pokemonSlice";


export const PokemonPage = () => {
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
          <li key={index} style={{ display: "flex" }}>
            <p>
              {pokemon.name}
            </p>
            <button onClick={() => dispatch(removePokemon({ id: pokemon.id }))}
              style={{ padding: '2px 4px' }}
            >Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
