import styled from 'styled-components';
import { useGetProductList } from '../services/queries/product';

import ProductItem from './ProductItem';

const ProductList = () => {
  const { data: productListData } = useGetProductList();
  const products = productListData?.data.data.products;

  return (
    <Container>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-left: -20px;
`;
