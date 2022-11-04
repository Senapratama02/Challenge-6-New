import axios from "axios";

import {
  getDetailMovieReducer,
} from "../reducers/detailReducer";

export const getDetailsMovies = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    dispatch(getDetailMovieReducer(data));
  } catch (error) {
    throw error;
  }
};
