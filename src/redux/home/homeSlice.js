import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
  details: {},
  status: 'idle',
  error: null,
};

export const fetchHotels = createAsyncThunk('home/fetchHotels', async (user_id) => {
  try {
    const res = await fetch(`https://hotels-reservations.onrender.com/users/${user_id}/rooms`);
    const data = res.json();
    return data;
  } catch (error) {
    return error.message;
  }
});

const homeSlice = createSlice({
  name: 'home',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchHotels.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const tempArr = [];
        keys.forEach((key) => {
          tempArr.push(payload[key]);
        });
        return {
          ...state,
          hotels: [...tempArr],
          status: 'loaded',
        };
      })
      .addCase(fetchHotels.rejected, (state, { error }) => ({
        ...state,
        status: 'failed',
        error: error.message,
      }));
  },
});

export default homeSlice.reducer;
