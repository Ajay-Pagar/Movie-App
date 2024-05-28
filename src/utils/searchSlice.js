import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    searchMovies: null,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.showSearch = !state.showSearch;
    },
    addSearchMovieResults: (state, action) => {
      state.searchMovies = action.payload;
    },
  },
});
export const { toggleSearchView, addSearchMovieResults } = searchSlice.actions;
export default searchSlice.reducer;
