import { HTMLProps } from 'react';

export type ProductImageProps = HTMLProps<HTMLImageElement>;

export const ProductImage = (props: ProductImageProps) => {
  return <img {...props} className="w-[600px]" />;
};
