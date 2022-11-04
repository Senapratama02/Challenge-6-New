import axios from "axios";

import {
  getAllMovieReducer,
  getAllMovieTReducer,
} from "../reducers/movieReducer";

export const getAllMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    dispatch(getAllMovieReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getAllTrendingMovies = () => async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
      );
      dispatch(getAllMovieTReducer(data));
    } catch (error) {
      throw error;
    }
  };
