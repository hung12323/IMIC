import axios from 'axios';

export const GET_MOVIE_DETAILS_REQUEST = 'GET_MOVIE_DETAILS_REQUEST';
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_FAILURE = 'GET_MOVIE_DETAILS_FAILURE';

export const getMovieDetails = (movieId: number) => {
  return (dispatch: any) => {
    dispatch({type: GET_MOVIE_DETAILS_REQUEST});

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=f91a6fa5f3b47945b773d716d9579059`,
      )
      .then(response => {
        dispatch({
          type: GET_MOVIE_DETAILS_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_MOVIE_DETAILS_FAILURE,
          payload: error.message,
        });
      });
  };
};
