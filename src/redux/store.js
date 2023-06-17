import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './home/homeSlice';
import loginSlice from './login/loginSlice';
import registerSlice from './register/registerSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    login: loginSlice,
    register: registerSlice,
  },
});

export default store;
