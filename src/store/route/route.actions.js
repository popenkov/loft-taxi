import { createAsyncThunk } from '@reduxjs/toolkit';

import { RouteService } from '../../services/route/route.service';

// регистрация
export const getRouteData = createAsyncThunk(
  'route/getRouteData',
  async ({ address1, address2 }, thunkAPI) => {
    try {
      const response = await RouteService.getRoute(address1, address2);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// авторизация
export const getAdressListData = createAsyncThunk(
  'route/getAdressListData',
  async () => {
    try {
      const response = await RouteService.getAddressList();
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
