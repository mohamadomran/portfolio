import { Footer } from '@/components/global/Footer';
import { Header } from '@/components/global/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="mx-auto w-screen max-w-6xl px-10 py-5 sm:px-11 sm:py-6 md:px-12 md:py-0">
        {children}
      </main>
      <Footer />
    </>
  );
};
