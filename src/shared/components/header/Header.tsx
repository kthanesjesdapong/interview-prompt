import { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <nav className='absolute border w-full text-end p-[10px]'>{children}</nav>
  );
};
