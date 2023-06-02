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

export const fetchAsyncMovieShowDetails = createAsyncThunk(
  "movieslice/fetchAsyncMovieShowDetails",
  async ({ imdbID }) => {
    const response = await movieApi.get(
      `?i=${imdbID}&plot=full&apiKey=${API_KEY}`
    );

    if (response && response.data) return response.data;
  }
);

const initialValues = {
  v2: {
    type: "",
    data: [],
  },
  movies: [],
  details: null,
};

const movieSlice = createSlice({
  name: "movieslice",
  initialState: initialValues,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    clearSelectedDetails: (state) => {
      state.details = null;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => console.log("Fetching..."),
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully.");
      return { ...state, v2: payload };
    },
    [fetchAsyncMovies.rejected]: () => console.log("Fetch call rejected."),
    [fetchAsyncMovieShowDetails.pending]: () =>
      console.log("Fetching details..."),
    [fetchAsyncMovieShowDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetch details success.");
      return { ...state, details: payload };
    },
    [fetchAsyncMovieShowDetails.rejected]: () =>
      console.log("Details fetch rejected."),
  },
});

export const { addMovies, clearSelectedDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movieSlice.v2;
export const getMovieShowDetails = (state) => state.movieSlice.details;
export default movieSlice.reducer;
