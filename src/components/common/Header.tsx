import Link from 'next/link';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import HeaderLogin from './HeaderLogin';

const Header: NextPage = () => {
  return (
    <Container>
      <Link href='/'>
        <Title>HAUS</Title>
      </Link>
      <HeaderLogin />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
  cursor: pointer;
`;
