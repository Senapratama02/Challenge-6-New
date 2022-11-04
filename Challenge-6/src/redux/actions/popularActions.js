import axios from "axios";

import {
  getTrailerMovieReducer,
} from "../reducers/popularReducer";

export const getAllTrailer = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    dispatch(getTrailerMovieReducer(data));
  } catch (error) {
    throw error;
  }
};
