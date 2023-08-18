import {Dispatch} from 'redux';
import axios from 'axios';

export const FETCH_MOVIE_DETAILS_REQUEST = 'FETCH_MOVIE_DETAILS_REQUEST';
export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS';
export const FETCH_MOVIE_DETAILS_FAILURE = 'FETCH_MOVIE_DETAILS_FAILURE';

export const fetchMovieDetails = (movieId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({type: FETCH_MOVIE_DETAILS_REQUEST});

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=f91a6fa5f3b47945b773d716d9579059`,
      );
      dispatch({type: FETCH_MOVIE_DETAILS_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: FETCH_MOVIE_DETAILS_FAILURE, payload: error.message});
    }
  };
};
