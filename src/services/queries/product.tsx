import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getProducts, getProductsById } from '../../rest/products';

export function useGetProductList() {
  const router = useRouter();
  const { page } = router.query;

  return useQuery(['get', 'productsList'], async () => await getProducts());
}

export function useGetProductsById(id?: string) {
  return useQuery(['get', 'products', id], async () => await getProductsById({ id: id ?? '' }), {
    enabled: !!id,
  });
}
