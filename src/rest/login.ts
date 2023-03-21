import { Auth } from '../types/auth';
import { SixShopResponseType } from '../types/common';
import { sixShopAPI } from './api';

export function postAuthLogin(body: { id: string; password: string }) {
  return sixShopAPI.post<SixShopResponseType<Auth>>('/login', body);
}
