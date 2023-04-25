import 'tailwindcss/tailwind.css';

import { Space_Mono } from 'next/font/google';

const mono = Space_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} font-mono`}>
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/rss/feed.xml"
        title="RSS feed for mohamadomran.dev"
      />
      <link
        rel="alternate"
        type="application/feed+json"
        href="/rss/feed.json"
        title="RSS feed for mohamadomran.dev"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/icons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/icons/favicon-32x32.png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/static/icons/apple-touch-icon.png" />
      <body>{children}</body>
    </html>
  );
}
