import type { TProduct } from '@api';
import { useProductCtx } from '../context';

type ProductItemProps = {
  product: TProduct;
};

//Individual Rows within ProductList
export const ProductItem = ({ product }: ProductItemProps) => {
  const { setActiveProduct } = useProductCtx();

  return (
    <div
      className='flex flex-col items-center cursor-pointer my-4'
      onClick={() => setActiveProduct(product)}>
      <p className='text-sm'>{product.title}</p>
      <img src={product.thumbnail} />
    </div>
  );
};
