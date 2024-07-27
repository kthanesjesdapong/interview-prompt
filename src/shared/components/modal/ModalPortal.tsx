import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useModalContext } from './ModalContext';

const root = document.getElementById('root');

export type ModalPortalProps = {
  children: ReactNode;
};
export const ModalPortal = ({ children }: ModalPortalProps) => {
  const { toggle } = useModalContext();
  return <>{toggle && root && createPortal(children, root)}</>;
};
