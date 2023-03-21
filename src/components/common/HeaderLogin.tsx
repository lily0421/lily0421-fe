import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import { userState } from '../../states/user';
import { AUTH } from '../../constants/common';
import { useRouter } from 'next/router';

const HeaderLogin = () => {
  const [user, setUser] = useRecoilState(userState);
  const [, , removeCookie] = useCookies([AUTH]);
  const router = useRouter();

  useEffect(() => {
    const userSession = sessionStorage.getItem('user');
    if (userSession) {
      const { id, name } = JSON.parse(userSession);
      setUser({ id, name });
    }
  }, []);

  const handleLogout = () => {
    removeCookie(AUTH, { path: '/' });
    setUser({ id: '', name: '' });
    sessionStorage.removeItem('user');
    router.push('/');
  };

  if (user.id) {
    return (
      <Container>
        <TitleName>{user.name}</TitleName>
        <LogoutButton onClick={handleLogout}>logout</LogoutButton>
      </Container>
    );
  }
  return (
    <Link href='/login'>
      <Title>login</Title>
    </Link>
  );
};

export default HeaderLogin;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Title = styled.a`
  cursor: pointer;
`;

const TitleName = styled.div``;

const LogoutButton = styled.button`
  cursor: pointer;
`;
