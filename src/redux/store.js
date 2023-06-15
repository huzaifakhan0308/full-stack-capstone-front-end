import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './home/homeSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});

export default store;
