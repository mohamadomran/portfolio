import 'styles/tailwind.css';

import { Space_Mono } from 'next/font/google';

const mono = Space_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400'],
});

import { Footer } from '@/components/global/Footer';
import { Header } from '@/components/global/Header';
import { PreviewBanner } from '@/components/preview/PreviewBanner';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getPreviewToken();

  return (
    <div className={`${mono.variable} flex min-h-screen flex-col`}>
      {token && <PreviewBanner />}
      <Header />
      <main className="mx-auto min-h-screen w-screen max-w-6xl px-10 py-5 sm:px-11 sm:py-6 md:px-12 md:py-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
