import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movied: [],
  };
  
  const movieSlicer = createSlice({
    name: "detail",
    initialState,
    reducers: {
      getDetailMovieReducer: (state, action) => {
        state.movied = action.payload;
      },
    },
  });
  
  export const { getDetailMovieReducer } = movieSlicer.actions;
  
  export default movieSlicer.reducer;