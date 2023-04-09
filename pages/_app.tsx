import type { AppProps } from 'next/app';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

import '../styles/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="px-10 sm:px-11 md:px-12 py-5 sm:py-6 md:py-0 max-w-3xl mx-auto w-screen">
        <Component {...pageProps} />
        <Analytics />
      </main>
      <Footer />
    </>
  );
}
