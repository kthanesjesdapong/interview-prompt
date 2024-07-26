import { ReactNode } from 'react';

type SidebarProps = {
  children: ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <nav className='w-[200px] h-[calc(100vh_-_45px)] border overflow-y-auto border-t-none p-5'>
      {children}
    </nav>
  );
};
