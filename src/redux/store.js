import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './home/homeSlice';
import reservationReducer from './Slices/ReservationSlice';

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    reservationSlice: reservationReducer,
  },
});

export default store;
