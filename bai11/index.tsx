import React from 'react';
import {Provider} from 'react-redux';
import store from '../bai11/store';
import MovieDetailsScreen from './MovieDetailsScreen';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MovieDetailsScreen movieId={123} />
    </Provider>
  );
};

export default App;
