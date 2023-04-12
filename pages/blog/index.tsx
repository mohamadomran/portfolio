import { PreviewSuspense } from '@sanity/preview-kit';
import { getAllPosts, getSettings } from 'lib/sanity.client';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { lazy } from 'react';

import { Layout } from '@/components/layouts/Layout';
import IndexPage from '@/components/pages/blog/BlogIndexPage';
import { BLOG_SEO_DESCRIPTION, BLOG_SEO_TITLE } from '@/constants/constants';
import { Post } from '@/types/Post';
import { Settings } from '@/types/Settings';

const PreviewIndexPage = lazy(
  () => import('@/components/pages/blog/PreviewIndexPage'),
);

interface PageProps {
  posts: Post[];
  settings: Settings;
  preview: boolean;
  token: string | null;
}

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

export default function Page(props: PageProps) {
  const { posts, settings, preview, token } = props;

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    );
  }

  return (
    <Layout>
      <NextSeo
        title={BLOG_SEO_TITLE}
        description={BLOG_SEO_DESCRIPTION}
        twitter={{
          handle: '@itsmohamadomran',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <IndexPage posts={posts} settings={settings} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx;

  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ]);

  return {
    props: {
      posts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  };
};
