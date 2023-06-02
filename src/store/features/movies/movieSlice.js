import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../../common/api/movieApi";
import { API_KEY } from "../../../common/constant";

export const fetchAsyncMovies = createAsyncThunk(
  "movieslice/fetchAsyncMovies", // <Name_of_the_slice>/<Async_function_name>
  async ({ search, type }) => {
    // Required parameters
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${search}&type=${type}`
    );

    if (response && response.data && response.data.Search)
      return { data: response.data.Search, type: type };
    //   dispatch(addMovies(response.data.Search));
  }
);

const initialValues = {
  type: "",
  data: [],
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
  extraReducers: {
    [fetchAsyncMovies.pending]: () => console.log("Fetching..."),
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully.");
      return { ...state, ...payload };
    },
    [fetchAsyncMovies.rejected]: () => console.log("Fetch call rejected."),
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movieSlice;
export default movieSlice.reducer;
