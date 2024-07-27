import { createContext, useContext } from 'react';

export type TModalContext = {
  toggle: boolean;
  toggleOff: () => void;
  toggleOn: () => void;
};

export const ModalContext = createContext<TModalContext | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error('useModalContext MUST be used within a Modal Provider');
  }
  return context;
};
