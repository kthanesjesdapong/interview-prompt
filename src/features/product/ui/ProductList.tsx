import { TProduct } from '@api';
import { ProductItem } from './ProductItem';

type ProductListProps = {
  productList: TProduct[];
};

//Maps over productLists and renders out ProductItem
export const ProductList = ({ productList }: ProductListProps) => {
  return (
    <>
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
};
