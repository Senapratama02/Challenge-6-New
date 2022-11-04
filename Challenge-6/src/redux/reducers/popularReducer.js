import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trailer: null,
  };
  
  const trailerSlicer = createSlice({
    name: "trailer",
    initialState,
    reducers: {
      getTrailerMovieReducer: (state, action) => {
        state.trailer = action.payload;
      },
    },
  });
  
  export const { getTrailerMovieReducer } = trailerSlicer.actions;
  
  export default trailerSlicer.reducer;