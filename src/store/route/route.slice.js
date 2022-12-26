import { createSlice } from '@reduxjs/toolkit';

import { getRouteData, getAdressListData } from './route.actions';

const initialState = {
  isLoading: false,
  routes: [],
  addresses: [],
  error: false,
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRouteData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRouteData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.routes = payload;
        state.error = false;
      })
      .addCase(getRouteData.rejected, (state) => {
        state.isLoading = false;
        state.routes = null;
        state.error = true;
      })
      .addCase(getAdressListData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdressListData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.addresses = payload.addresses;
        state.error = false;
      })
      .addCase(getAdressListData.rejected, (state) => {
        state.isLoading = false;
        state.addresses = null;
        state.error = true;
      });
  },
});

export const { reducer } = routeSlice;
