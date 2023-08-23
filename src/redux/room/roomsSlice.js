import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const CreateRoom = createAsyncThunk('create/room', async (obj) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${obj.room.users_id}/rooms`, {
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
