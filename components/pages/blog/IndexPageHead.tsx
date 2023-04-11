import Head from 'next/head';

import BlogMeta from '@/components/pages/blog/BlogMeta';
import { Settings } from '@/types/Settings';

export interface IndexPageHeadProps {
  settings: Settings;
}

export default function IndexPageHead({ settings }: IndexPageHeadProps) {
  const { title, description, ogImage = {} } = settings;
  const ogImageTitle = ogImage?.title;

  return (
    <Head>
      <title>{title}</title>
      <BlogMeta />
      <meta key="description" name="description" />
      <meta
        property="og:image"
        content={`${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/api/og?${new URLSearchParams({ title: ogImageTitle! })}`}
      />
    </Head>
  );
}
