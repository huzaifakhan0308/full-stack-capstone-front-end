import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const CreateReservation = createAsyncThunk('create/reservation', async (obj) => {
  console.log(obj);
  const response = await fetch(`https://hotels-reservations.onrender.com/users/${obj.reservation.users_id}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  console.log(data);
  return data;
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {},
  reducers: {},
});
export default reservationSlice.reducer;
