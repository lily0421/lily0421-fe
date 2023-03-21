import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getProducts, getProductsById } from '../../rest/products';

export function useGetProductList() {
  const router = useRouter();
  let page: string | undefined = Array.isArray(router.query.page)
    ? router.query.page[0]
    : router.query.page;
  page = page ? page : '1';

  return useQuery(['get', 'productsList', page], async () => await getProducts({ page }), {
    onError: (err: any) => {
      const { alertMessage } = err?.response ?? {};
      if (alertMessage.message) {
        alert(alertMessage.message);
        router.push('/404');
      } else {
        throw err;
      }
    },
  });
}

export function useGetProductsById(id?: string) {
  const router = useRouter();

  return useQuery(['get', 'products', id], async () => await getProductsById({ id: id ?? '' }), {
    enabled: !!id,
    onError: (err: any) => {
      const { alertMessage } = err?.response ?? {};
      if (alertMessage.message) {
        alert(alertMessage.message);
        router.push('/404');
      } else {
        throw err;
      }
    },
  });
}
