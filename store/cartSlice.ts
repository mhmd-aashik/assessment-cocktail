// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      // Add favorite if it doesn't already exist in the favorites array
      const exists = state.favorites.find(
        (fav) => fav.idDrink === action.payload.idDrink
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      // Remove favorite if it exists
      state.favorites = state.favorites.filter(
        (fav) => fav.idDrink !== action.payload.idDrink
      );
    },
  },
});

export const { addFavorite, removeFavorite } = cartSlice.actions;
export default cartSlice.reducer;