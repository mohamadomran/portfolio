import 'tailwindcss/tailwind.css';

import { Analytics } from '@vercel/analytics/react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
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
      <title key="title">Portfolio - Mohamad Omran</title>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
