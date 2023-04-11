import { PreviewSuspense } from '@sanity/preview-kit';
import { getAllPosts, getSettings } from 'lib/sanity.client';
import { GetStaticProps } from 'next';
import { lazy } from 'react';

import IndexPage from '@/components/pages/blog/IndexPage';
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

  return <IndexPage posts={posts} settings={settings} />;
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
