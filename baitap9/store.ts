import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './movieReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
