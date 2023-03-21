import { useMutation } from '@tanstack/react-query';
import { postAuthLogin } from '../../rest/login';
import { useCookies } from 'react-cookie';
import { AUTH } from '../../constants/common';

export function useOnLogin() {
  return useMutation(postAuthLogin, {
    onSuccess: (res, variables) => {
      const auth = res.data.data;
      //TODO
    },
    onError: (e: any) => {
      console.log('로그인 실패', e);
    },
  });
}
