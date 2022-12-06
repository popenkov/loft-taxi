import { getStoreLocal } from '../../utils/localStorage';
import axios from 'axios';
import { saveToStorage } from '../auth/auth.helper';

const AUTH_TOKEN = getStoreLocal('userToken');

export const PaymentService = {
  async getCard() {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}card?token=${AUTH_TOKEN}`
    );
    if (response.status === 200) {
      saveToStorage('cardAdded', 'true');
    }
    return response;
  },

  async postCard(data) {
    const { cardNumber, expiryDate, cardName, cvc } = data;
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}card`, {
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cardName: cardName,
      cvc: cvc,
      token: AUTH_TOKEN,
    });

    if (response.status === 200) {
      // запрос на обновление данных
      this.getCard();
    }

    return response;
  },
};
