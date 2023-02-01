import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PokemonListPaginationState {
  value: number;
}

const initialState: PokemonListPaginationState = {
  value: 0,
};

export const pokemonListPaginationSlice = createSlice({
  name: "pokemonListPagination",
  initialState,
  reducers: {
    nextPage: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    prevPage: (state, action: PayloadAction<number>) => {
      if (state.value - action.payload < 0) {
        state.value = 0;
      } else {
        state.value -= action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextPage, prevPage } = pokemonListPaginationSlice.actions;

export const pokemonListPaginationReducer = pokemonListPaginationSlice.reducer;
