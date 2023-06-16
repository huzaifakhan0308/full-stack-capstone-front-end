import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (cred) => {
  const response = await fetch('https://hotels-reservations.onrender.com/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cred),
  });
  const data = await response.json();
  return data;
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default loginSlice.reducer;
