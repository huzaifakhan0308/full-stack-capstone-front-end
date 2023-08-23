import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const CreateReservation = createAsyncThunk('create/reservation', async (obj) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${obj.reservation.users_id}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  return data;
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {},
  reducers: {},
});
export default reservationSlice.reducer;
