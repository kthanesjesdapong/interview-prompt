import type { TProduct } from '@api';
import { filterActiveProductImg } from '../lib/filter-active-product-image';

type ProductProps = {
  product: TProduct;
};

export const Product = ({ product }: ProductProps) => {
  const filteredImage = filterActiveProductImg(product);
  return (
    <div className='border w-[calc(100%_-_200px)] m-auto'>
      <header className='flex flex-col items-center justify-center'>
        <h3>{product.title}</h3>
      </header>
      <div className='flex justify-center'>
        <img
          src={filteredImage[filteredImage.length - 1]}
          alt=''
          className='w-[600px]'
        />
      </div>
    </div>
  );
};
