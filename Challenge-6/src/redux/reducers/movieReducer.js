import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    moviet: [],
  };
  
  const movieSlicer = createSlice({
    name: "movie",
    initialState,
    reducers: {
      getAllMovieReducer: (state, action) => {
        state.movies = action.payload;
      },
      getAllMovieTReducer: (state, action) => {
        state.moviet = action.payload;
      },
    },
  });
  
  export const { getAllMovieReducer,getAllMovieTReducer } = movieSlicer.actions;
  
  export default movieSlicer.reducer;