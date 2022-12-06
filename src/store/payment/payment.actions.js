import { createAsyncThunk } from '@reduxjs/toolkit';

import { PaymentService } from '../../services/payment/payment.service';

export const sendCardData = createAsyncThunk(
  'payment/sendCardData',
  async (data, thunkAPI) => {
    try {
      const response = await PaymentService.postCard(data);
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

export const getCardData = createAsyncThunk(
  'payment/getCardData',
  async (thunkAPI) => {
    try {
      const response = await PaymentService.getCard();
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
