import { SixShopResponseType } from '../types/common';
import { Product } from '../types/product';
import { sixShopAPI } from './api';

export function getProducts({
  page = '1',
}: {
  page?: string;
} = {}) {
  return sixShopAPI.get<SixShopResponseType<{ products: Product[]; totalCount: number }>>(
    '/products',
    {
      params: {
        page,
      },
    }
  );
}

export function getProductsById({ id }: { id: string }) {
  return sixShopAPI.get<SixShopResponseType<{ product: Product }>>(`/products/${id}`);
}
