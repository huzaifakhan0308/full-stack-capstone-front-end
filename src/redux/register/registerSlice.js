import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/register', async (cred) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cred),
  });
  const data = await response.json();
  return data;
});

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default registerSlice.reducer;
