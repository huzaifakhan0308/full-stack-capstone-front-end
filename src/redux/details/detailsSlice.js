import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  room: {},
  status: 'idle',
  error: null,
};

export const fetchDetails = createAsyncThunk('details/fetchDetails', async ({ user_id, room_id }) => {
  try {
    const res = await fetch(`https://hotels-reservations.onrender.com/users/${user_id}/rooms/${room_id}`);
    const data = res.json();
    return data;
  } catch (error) {
    return error.message;
  }
});

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    resetState: (state) => ({
      ...state,
      room: {},
      status: 'idle',
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchDetails.fulfilled, (state, { payload }) => ({
        ...state,
        room: payload,
        status: 'successful',
      }))
      .addCase(fetchDetails.rejected, (state, { error }) => ({
        ...state,
        status: 'failed',
        error: error.message,
      }));
  },
});

export const { resetState } = detailsSlice.actions;
export default detailsSlice.reducer;
