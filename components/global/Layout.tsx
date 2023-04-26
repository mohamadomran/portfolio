import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <main className="mx-auto max-w-screen-xl flex-grow px-4">{children}</main>
    </div>
  );
};
