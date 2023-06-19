import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

export const GetReservation = createAsyncThunk('create/reservation', async (obj) => {
  try {
    const res = await fetch(`https://hotels-reservations.onrender.com/users/${obj.user_id}/reservations`);
    const data = res.json();
    console.log(data);
    const res2 = await fetch(`https://hotels-reservations.onrender.com/users/${obj.user_id}/rooms`);
    const data2 = res2.json();
    console.log(data2);
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const reservationListSlice = createSlice({
  name: 'reservationList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetReservation.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(GetReservation.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const tempArr = [];
        keys.forEach((key) => {
          tempArr.push(payload[key]);
        });
        return {
          ...state,
          reservations: [...tempArr],
          status: 'loaded',
        };
      })
      .addCase(GetReservation.rejected, (state, { error }) => ({
        ...state,
        status: 'failed',
        error: error.message,
      }));
  },

});
export default reservationListSlice.reducer;
