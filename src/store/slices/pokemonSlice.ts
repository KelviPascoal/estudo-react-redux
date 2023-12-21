import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemon } from "../../service/api";

type Pokemon = {
  id: string;
  name: string;
};

type PokemonState = {
  pokemons: Pokemon[];
  isLoading: boolean;
  isError: boolean;
};

const initialState: PokemonState = {
  pokemons: [{ id: "1", name: "bulbasaur" }],
  isLoading: false,
  isError: false,
};

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async () => {
    return await getPokemon();
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loadPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
    removePokemon: (state, action: PayloadAction<Pick<Pokemon, "id">>) => {
      const index = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.id
      );
      state.pokemons.splice(index, 1);
    },
    activeLoading: (state) => {
      state.isLoading = true;
    },
    inactiveLoading: (state) => {
      state.isLoading = false;
    },
    hasError: (state) => {
      state.isError = true;
    },
    hasNotError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(fetchPokemons.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchPokemons.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
  },
});

export const {
  loadPokemons,
  activeLoading,
  inactiveLoading,
  hasError,
  hasNotError,
  removePokemon,
} = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;
