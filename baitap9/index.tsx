import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import MovieDetailScreen from './MovieDetailScreen'; // Thay đổi thành đường dẫn đúng tới màn hình hiển thị chi tiết phim

const App = () => {
  return (
    <Provider store={store}>
      <MovieDetailScreen />
    </Provider>
  );
};

export default App;
