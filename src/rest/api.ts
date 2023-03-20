import axios from 'axios';

export const sixShopAPI = axios.create({
  baseURL: 'https://api.sixshop.com',
});
