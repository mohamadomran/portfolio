import { toPlainText } from '@portabletext/react';
import Head from 'next/head';

import BlogMeta from '@/components/ui/BlogMeta';
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
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/api/og?${new URLSearchParams({ title: ogImageTitle! })}`}
      />
    </Head>
  );
}
