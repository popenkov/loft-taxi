import { getStoreLocal } from '../../utils/localStorage';
import axios from 'axios';

const AUTH_TOKEN = getStoreLocal('userToken');

export const PaymentService = {
  async postCard(data) {
    const { cardNumber, expiryDate, cardName, cvc } = data;
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}route`,
      {
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cardName: cardName,
        cvc: cvc,
        token: AUTH_TOKEN,
      }
    );

    return response;
  },

  async getCard() {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}card?token=${AUTH_TOKEN}`
    );

    return response;
  },
};
