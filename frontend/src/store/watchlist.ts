'use client'

import { createSlice } from "@reduxjs/toolkit";

export const watchlist = createSlice({
  name: "favorite",
  initialState: {
    items: [] as string[],
  },
  reducers: {
    toggleWatchList: (state, action) => {
      const index = state.items.indexOf(action.payload);
      if (index === -1) {
        state.items.push(action.payload);
      } else {
        state.items.splice(index, 1);
      }
    }
  }
});

export const { toggleWatchList } = watchlist.actions;
export default watchlist.reducer;