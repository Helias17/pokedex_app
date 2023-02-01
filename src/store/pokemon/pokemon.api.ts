import { IPokemonsList } from "./pokemon.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemonDetails } from "./pokemonDetails.type";

/* 
reducerPath -> it's just an unique key to reducer
baseQuery -> base URL for our API requests
*/

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    getPokemons: build.query<IPokemonsList, number>({
      query: (offset = 0) => `pokemon?offset=${offset}&limit=20`,
    }),
    getPokemonDetails: build.query<IPokemonDetails, number | string>({
      query: (id: number | string) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonDetailsQuery } = pokemonApi;
