import {AppState, MovieDetails} from '../types';
import {
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
} from '../actions/movieActions';

interface Action {
  type: string;
  payload?: any;
}

const initialState: AppState = {
  movie: null,
  isLoading: false,
  error: null,
};

const movieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_MOVIE_DETAILS_FAILURE:
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
