import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (cred, thunkAPI) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cred),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return thunkAPI.rejectWithValue(errorData);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert('something went wrong! check your username or password.');
    return thunkAPI.rejectWithValue(error.message);
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    status: 'normal',
    data: null,
    loading: false,
    error: null,
  },
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
        state.status = 'fulfilled';
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
