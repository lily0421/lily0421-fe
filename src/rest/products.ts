import { SixShopResponseType } from '../types/common';
import { Product } from '../types/product';
import { sixShopAPI } from './api';

export function getProducts({
  size,
  page,
}: {
  size?: string;
  page?: string;
} = {}) {
  return sixShopAPI.get<SixShopResponseType<{ products: Product[]; totalCount: number }>>(
    '/products',
    {
      params: {
        size,
        page,
      },
    }
  );
}

export function getProductsBtyd({ id }: { id: string }) {
  return sixShopAPI.get<SixShopResponseType<{ product: Product }>>(`/products/${id}`);
}
