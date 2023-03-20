import Link from 'next/link';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const Header: NextPage = () => {
  return (
    <Container>
      <Link href='/'>
        <Title>HAUS</Title>
      </Link>
      <Link href='/login'>
        <p>login</p>
      </Link>
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
`;
