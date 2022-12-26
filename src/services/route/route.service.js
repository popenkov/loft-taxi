import axios from 'axios';

export const RouteService = {
  async getRoute(addressOne, addressTwo) {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}route?address1=${addressOne}&address2=${addressTwo}`
    );
    return response;
  },

  async getAddressList() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}addressList`
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
