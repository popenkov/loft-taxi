import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '../../services/auth/auth.service';

// регистрация
export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// авторизация
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password);
      if (response.data.success) {
        return response.data;
      } else {
        // TODO не получается пробросить ошибку throw
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
