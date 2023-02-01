import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./pokemon/pokemon.api";
import { wishlistReducer } from "../components/Wishlist/wishlistSlice";
import { pokemonListPaginationReducer } from "../components/PokemonList/pokemonlistPaginationSlice";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    wishlist: wishlistReducer,
    pokemonListPagination: pokemonListPaginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
