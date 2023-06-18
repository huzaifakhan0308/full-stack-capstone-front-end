import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const GetReservation = createAsyncThunk('create/reservation', async (obj) => {
  try {
    const res = await fetch(`https://hotels-reservations.onrender.com/users/${obj.user_id}/reservations`);
    const data = res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const reservationListSlice = createSlice({
  name: 'reservationList',
  initialState: {},
  reducers: {},
});
export default reservationListSlice.reducer;
