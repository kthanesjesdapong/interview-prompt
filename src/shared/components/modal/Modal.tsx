import { ReactNode } from 'react';
import { useToggle } from '@hooks/use-toggle';
import { ModalContext } from './ModalContext';

type ModalProps = {
  children: ReactNode;
};

/*
Could've also made this a Compound Component-
and co-located Components associated with Modal Component
Modal.Portal = const ModalPortal = () => {
}
*/
export const Modal = ({ children }: ModalProps) => {
  const { toggle, toggleOn, toggleOff } = useToggle();
  return (
    <ModalContext.Provider value={{ toggle, toggleOn, toggleOff }}>
      {children}
    </ModalContext.Provider>
  );
};
