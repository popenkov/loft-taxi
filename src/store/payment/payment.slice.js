import { createSlice } from '@reduxjs/toolkit';

import { sendCardData, getCardData } from './payment.actions';

const initialState = {
  isLoading: false,
  card: {},
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendCardData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendCardData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(sendCardData.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCardData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCardData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.card = payload;
      })
      .addCase(getCardData.rejected, (state) => {
        state.isLoading = false;
        state.card = null;
      });
  },
});

export const { reducer } = paymentSlice;
