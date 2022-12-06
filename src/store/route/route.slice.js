import { createSlice } from '@reduxjs/toolkit';

import { getRouteData, getAdressListData } from './route.actions';

const initialState = {
  isLoading: false,
  routes: [],
  addresses: [],
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
      })
      .addCase(getRouteData.rejected, (state) => {
        state.isLoading = false;
        state.routes = null;
      })
      .addCase(getAdressListData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdressListData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.addresses = payload.addresses;
      })
      .addCase(getAdressListData.rejected, (state) => {
        state.isLoading = false;
        state.addresses = null;
      });
  },
});

export const { reducer } = routeSlice;
