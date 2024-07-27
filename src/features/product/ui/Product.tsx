import type { TProduct } from '@api';
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalPortal,
} from '@components/modal';
import { filterActiveProductImg } from '../lib';
import { ProductImage } from './ProductImage';

type ProductProps = {
  product: TProduct;
};

export const Product = ({ product }: ProductProps) => {
  const filteredImage = filterActiveProductImg(product);
  const imgSrc = filteredImage[filteredImage.length - 1] ?? product.thumbnail;

  return (
    <div className="m-auto w-[calc(100%_-_200px)] border">
      <header className="flex flex-col items-center justify-center">
        <h3>{product.title}</h3>
      </header>
      <div className="flex justify-center">
        <Modal>
          <ModalTrigger>
            <ProductImage src={imgSrc} />
          </ModalTrigger>
          <ModalPortal>
            <ModalContent>
              <ProductImage src={imgSrc} />
            </ModalContent>
          </ModalPortal>
        </Modal>
      </div>
    </div>
  );
};
