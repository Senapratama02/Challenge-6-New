import axios from "axios";

import {
  getAllSearchReducer,
} from "../reducers/searchReducer";

export const getAllSearch = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}`
    );
    dispatch(getAllSearchReducer(data));
  } catch (error) {
    throw error;
  }
};
