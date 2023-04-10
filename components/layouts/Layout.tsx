import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="mx-auto w-screen max-w-3xl px-10 py-5 sm:px-11 sm:py-6 md:px-12 md:py-0">
        {children}
      </main>
      <Footer />
    </>
  );
};
