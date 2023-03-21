import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { DEFAULT_PAGE } from '../constants/common';

const Pagination = ({
  totalPages,
  onChangePage,
  isFirstPage,
  isLastPage,
}: {
  totalPages?: number;
  onChangePage: (page: number) => void;
  isFirstPage: boolean;
  isLastPage: boolean;
}) => {
  const router = useRouter();
  const { page } = router.query;
  const PAGE = page === undefined ? DEFAULT_PAGE : Number(page);
  const [visiblePages, setVisiblePages] = useState([1, 2, 3, 4, 5]);

  const handlePrevClick = () => {
    const firstVisiblePage = visiblePages[0];
    if (firstVisiblePage > 1) {
      setVisiblePages((prevPages) => prevPages.map((page) => (page - 5 > 1 ? page - 5 : 1)));
      router.push(`?page=${firstVisiblePage - 5}`);
    }
  };

  const handleNextClick = () => {
    const lastVisiblePage = visiblePages[visiblePages.length - 1];
    if (totalPages && lastVisiblePage < totalPages) {
      setVisiblePages((prevPages) => prevPages.map((page) => page + 5));
      router.push(`?page=${lastVisiblePage + 1}`);
    }
  };

  const handlePageClick = (page: number) => {
    if (page !== PAGE) {
      onChangePage(page);
    }
  };

  return (
    <Container>
      <Button disabled={isFirstPage} onClick={handlePrevClick}>
        <VscChevronLeft />
      </Button>
      <PageWrapper>
        {visiblePages.map((pageNum, index) => (
          <Page
            key={index}
            selected={pageNum === PAGE}
            disabled={pageNum === PAGE}
            onClick={() => handlePageClick(pageNum)}
          >
            {pageNum}
          </Page>
        ))}
      </PageWrapper>
      <Button disabled={isLastPage} onClick={handleNextClick}>
        <VscChevronRight />
      </Button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 40px;
  margin-left: -20px;
`;

const Button = styled.button`
  cursor: pointer;

  &:disabled {
    color: #e2e2ea;
    cursor: default;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

type PageType = {
  selected: boolean;
};

const Page = styled.button<PageType>`
  padding: 4px 6px;
  background-color: ${({ selected }) => (selected ? '#000' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-size: 20px;
  cursor: pointer;

  & + & {
    margin-left: 4px;
  }

  &:disabled {
    cursor: default;
  }
`;
