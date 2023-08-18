import axios from 'axios';
import {Dispatch} from 'redux';
import {MovieDetails} from '../types';

export const FETCH_MOVIE_DETAILS_REQUEST = 'FETCH_MOVIE_DETAILS_REQUEST';
export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS';
export const FETCH_MOVIE_DETAILS_FAILURE = 'FETCH_MOVIE_DETAILS_FAILURE';

export const fetchMovieDetails = (movieId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchMovieDetailsRequest());

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=f91a6fa5f3b47945b773d716d9579059`,
      )
      .then(response => {
        const movie: MovieDetails = response.data;
        dispatch(fetchMovieDetailsSuccess(movie));
      })
      .catch(error => {
        dispatch(fetchMovieDetailsFailure(error.message));
      });
  };
};

export const fetchMovieDetailsRequest = () => {
  return {
    type: FETCH_MOVIE_DETAILS_REQUEST,
  };
};

export const fetchMovieDetailsSuccess = (movie: MovieDetails) => {
  return {
    type: FETCH_MOVIE_DETAILS_SUCCESS,
    payload: movie,
  };
};

export const fetchMovieDetailsFailure = (error: string) => {
  return {
    type: FETCH_MOVIE_DETAILS_FAILURE,
    payload: error,
  };
};
