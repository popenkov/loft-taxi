import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '../../services/auth/auth.service';

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, name, surname }, thunkAPI) => {
    try {
      const response = await AuthService.register(
        email,
        password,
        name,
        surname
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password);
      if (response.data.success) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data.error);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});
