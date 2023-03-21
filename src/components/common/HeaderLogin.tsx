import Link from 'next/link';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const HeaderLogin: NextPage = () => {
  return (
    <Container>
      <Link href='/login'>
        <Title>login</Title>
      </Link>
    </Container>
  );
};

export default HeaderLogin;

const Container = styled.div``;

const Title = styled.a`
  cursor: pointer;
`;
