import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const CreateRoom = createAsyncThunk('create/room', async (obj, thunkAPI) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${obj.room.users_id}/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return thunkAPI.rejectWithValue(errorData);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    status: 'idle',
    roomData: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateRoom.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(CreateRoom.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.roomData = action.payload;
      })
      .addCase(CreateRoom.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default roomSlice.reducer;
