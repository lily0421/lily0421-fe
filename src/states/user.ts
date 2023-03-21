import { atom } from 'recoil';
import { UserData } from '../types/user';

export const makeAnnonymousUser = () => ({
  id: '',
  name: '',
});

export const userState = atom<UserData>({
  key: 'userState',
  default: makeAnnonymousUser(),
});
