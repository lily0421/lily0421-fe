import { useRouter } from 'next/router';
import { SetStateAction } from 'react';
import { DEFAULT_PAGE, DEFAULT_SIZE } from '../../constants/common';

const usePagination = ({ totalItems }: { totalItems?: number }) => {
  const router = useRouter();
  const { page } = router.query;
  const PAGE = page === undefined ? DEFAULT_PAGE : Number(page);
  const totalPages = totalItems && Math.ceil(totalItems / DEFAULT_SIZE);
  const isFirstPage = PAGE === 1;
  const isLastPage = PAGE === totalPages;

  const onChangePage = (page: SetStateAction<number>) => {
    if (totalPages && page >= 1 && page <= totalPages) {
      router.push(`?page=${page}`);
    }
  };

  return { totalPages, onChangePage, isFirstPage, isLastPage };
};

export default usePagination;
