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
      className="my-4 flex cursor-pointer flex-col items-center"
      onClick={() => setActiveProduct(product)}
    >
      <p className="text-sm">{product.title}</p>
      <img src={product.thumbnail} />
    </div>
  );
};
