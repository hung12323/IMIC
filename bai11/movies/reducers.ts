import {
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
} from './actions';

interface MovieDetailsState {
  loading: boolean;
  error: string | null;
  details: any | null;
}

const initialState: MovieDetailsState = {
  loading: false,
  error: null,
  details: null,
};

const movieDetailsReducer = (
  state = initialState,
  action: any,
): MovieDetailsState => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_REQUEST:
      return {...state, loading: true, error: null, details: null};
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {...state, loading: false, details: action.payload};
    case FETCH_MOVIE_DETAILS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default movieDetailsReducer;
