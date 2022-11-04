import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: [],
  };
  
  const searchSlicer = createSlice({
    name: "search",
    initialState,
    reducers: {
      getAllSearchReducer: (state, action) => {
        state.search = action.payload;
      },
    },
  });
  
  export const { getAllSearchReducer } = searchSlicer.actions;
  
  export default searchSlicer.reducer;