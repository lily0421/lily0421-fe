import { atom } from 'recoil';
import { UserData } from '../types/user';

export const makeAnnonymousUser = () => ({
  id: 'sixshop_-1',
  name: '',
});

export const User = atom<UserData>({
  key: 'user',
  default: makeAnnonymousUser(),
});
