import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type WishlistItemType = {
  name: string;
  id: number;
};

export interface WishlistState {
  value: WishlistItemType[];
}

const wishlistLocalStorage = localStorage.getItem("pokedex_wishlist")
  ? JSON.parse(localStorage.getItem("pokedex_wishlist") as string)
  : [];

const initialState: WishlistState = {
  value: wishlistLocalStorage,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    togglePokemon: (state, action: PayloadAction<WishlistItemType>) => {
      if (
        state.value.some(
          (wishlistItem) => wishlistItem.id === action.payload.id
        )
      ) {
        state.value = state.value.filter(
          (wishlistItem) => wishlistItem.id !== action.payload.id
        );
      } else {
        state.value.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { togglePokemon } = wishlistSlice.actions;

export const wishlistReducer = wishlistSlice.reducer;
