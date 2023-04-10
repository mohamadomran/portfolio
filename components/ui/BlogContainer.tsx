import { ReactNode } from 'react';

export default function BlogContainer({ children }: { children: ReactNode }) {
  return <div className="container mx-auto px-5">{children}</div>;
}
