import { PropsWithChildren } from 'react';
import { TProductContext, ProductContext } from './ProductContext';

type ProductContextProviderProps = PropsWithChildren<TProductContext>;

export const ProductContextProvider = ({
  activeProduct,
  setActiveProduct,
  children,
}: ProductContextProviderProps) => {
  return (
    <ProductContext.Provider value={{ activeProduct, setActiveProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
