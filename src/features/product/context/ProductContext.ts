import type { TProduct } from "@api";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type TProductContext = {
  activeProduct?: TProduct;
  setActiveProduct: Dispatch<SetStateAction<TProduct | undefined>>;
};

export const ProductContext = createContext<TProductContext | null>(null);

export const useProductCtx = () => {
  const context = useContext(ProductContext);
  if (context === null) {
    throw new Error('useProductCtx must be used within a Product Provider');
  }
  return context;
};