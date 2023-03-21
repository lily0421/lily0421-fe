import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';

import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import { useGetProductList } from '../services/queries/product';
import usePagination from '../utilities/hooks/usePagination';

const HomePage: NextPage = () => {
  const { data: productListData } = useGetProductList();
  const data = productListData?.data.data;

  const { totalPages, onChangePage, isFirstPage, isLastPage } = usePagination({
    totalItems: data?.totalCount,
  });

  return (
    <>
      <Container>
        <ProductList />
        <Pagination
          totalPages={totalPages}
          onChangePage={onChangePage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
        />
      </Container>
    </>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
