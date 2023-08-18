import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import MovieDetailsScreen from './MovieDetailsScreen';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MovieDetailsScreen movieId={20235714} />
    </Provider>
  );
};

export default App;
