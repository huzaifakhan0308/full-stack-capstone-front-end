import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './home/homeSlice';
import loginSlice from './login/loginSlice';
import registerSlice from './register/registerSlice';
import roomSlice from './room/roomsSlice';
import reservationSlice from './reservation/reservationSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    login: loginSlice,
    register: registerSlice,
    room: roomSlice,
    reservation: reservationSlice,
  },
});

export default store;
