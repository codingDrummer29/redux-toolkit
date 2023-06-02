import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movieslice",
  initialState: initialValues,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movieSlice.movies;
export default movieSlice.reducer;
