import { SixShopResponseType } from '../types/common';
import { User } from '../types/user';
import { sixShopAPI } from './api';

export function getUsersById({ id }: { id: string }) {
  return sixShopAPI.get<SixShopResponseType<User>>(`/users/${id}`);
}
