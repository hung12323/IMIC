import {combineReducers} from 'redux';
import movieDetailsReducer from './movies/reducers';

const rootReducer = combineReducers({
  movieDetails: movieDetailsReducer,
});

export default rootReducer;
