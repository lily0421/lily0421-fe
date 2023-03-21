import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

import setupMSW from '../api/setup';
import Header from '../components/common/Header';
import GlobalStyle from '../styles/GlobalStyle';

import { RecoilRoot } from 'recoil';

setupMSW();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 2 },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Background />
          <Content>
            <Header />
            <Component {...pageProps} />
          </Content>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
`;

const Content = styled.div`
  width: 420px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;
