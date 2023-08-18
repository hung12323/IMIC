import {
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
} from './movieActions';

const initialState = {
  movieData: null,
  isLoading: false,
  error: null,
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movieData: action.payload,
      };
    case GET_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
