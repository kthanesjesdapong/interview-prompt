import { cloneElement, ReactElement } from 'react';
import { useModalContext } from './ModalContext';

type ModalTriggerProps = {
  children: ReactElement;
};

export const ModalTrigger = ({ children }: ModalTriggerProps) => {
  const { toggleOn } = useModalContext();
  return (
    <div className="cursor-pointer">
      {cloneElement(children, { onClick: toggleOn })}
    </div>
  );
};
