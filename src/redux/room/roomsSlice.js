import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const CreateRoom = createAsyncThunk('create/room', async (obj) => {
  console.log(obj);
  const response = await fetch(`https://hotels-reservations.onrender.com/users/${obj.room.users_id}/rooms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  return data;
});

const roomSlice = createSlice({
  name: 'room',
  initialState: {},
  reducers: {},
});
export default roomSlice.reducer;
