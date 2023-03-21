import { useMutation } from '@tanstack/react-query';
import { postAuthLogin } from '../../rest/login';
import { useCookies } from 'react-cookie';
import { AUTH } from '../../constants/common';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../states/user';
import { useRouter } from 'next/router';
import { sixShopAPI } from '../../rest/api';
import { getUsersById } from '../../rest/users';

export function useOnLogin() {
  const [_, setCookie] = useCookies([AUTH]);
  const setUser = useSetRecoilState(userState);
  const router = useRouter();

  return useMutation(postAuthLogin, {
    onSuccess: async (res) => {
      const authData = res.data.data;
      const getId = authData?.user?.id ?? '';
      try {
        const { data } = await getUsersById({ id: getId });
        const id = data?.data?.user?.id ?? '';
        const name = data.data.user.name ?? '';
        setCookie(AUTH, authData, { path: '/' });
        sixShopAPI.defaults.headers.common['Authorization'] = authData.accessToken;
        setUser({ id, name });
        sessionStorage.setItem('user', JSON.stringify({ id, name }));
        router.push('/');
      } catch (err: any) {
        const { alertMessage } = err?.response ?? {};
        if (alertMessage) {
          alert(alertMessage.message);
        } else {
          throw err;
        }
      }
    },
    onError: (e: any) => {
      alert('아이디 및 비밀번호를 다시 입력해주세요');
    },
  });
}
