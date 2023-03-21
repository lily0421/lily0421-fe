import axios from 'axios';
import { ERROR } from '../constants/error';

export const sixShopAPI = axios.create({
  baseURL: 'https://api.sixshop.com',
});

sixShopAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (err: any) => {
    const error = {
      ...err,
      response: {
        ...err.response,
        alertMessage:
          err.response?.data.error.message && ERROR[err.response?.data.error.message]
            ? ERROR[err.response?.data.error.message]
            : undefined,
      },
    };

    throw error;
  }
);
