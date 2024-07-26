import { ReactNode } from 'react';

type SidebarProps = {
  children: ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  return <nav>{children}</nav>;
};
