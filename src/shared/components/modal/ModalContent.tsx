import { ReactNode } from 'react';
import { useModalContext } from './ModalContext';

export type ModalContentProps = {
  children: ReactNode;
};
//Renders Individual Modal
export const ModalContent = ({ children }: ModalContentProps) => {
  const { toggleOff } = useModalContext();
  return (
    <div className="absolute top-0 flex h-full w-full items-center bg-black bg-opacity-70">
      <div className="m-auto rounded-md border bg-slate-100 px-5 py-2">
        <div
          className="w-full cursor-pointer text-end text-lg"
          onClick={toggleOff}
        >
          X
        </div>
        {children}
      </div>
    </div>
  );
};
