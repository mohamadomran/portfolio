import { PreviewSuspense } from '@sanity/preview-kit';
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'lib/sanity.client';
import { GetStaticProps } from 'next';
import { createClient } from 'next-sanity';
import { lazy } from 'react';

import { Layout } from '@/components/layouts/Layout';
import PostPage from '@/components/ui/PostPage';
import { Blog } from '@/types/Blog';
import { Post } from '@/types/Post';
import { Settings } from '@/types/Settings';

const PreviewPostPage = lazy(() => import('@/components/ui/PreviewPostPage'));

interface PageProps {
  post: Post;
  morePosts: Post[];
  settings?: Settings;
  preview: boolean;
  token: string | null;
}

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, post, morePosts, preview, token } = props;

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PostPage
            loading
            preview
            post={post}
            morePosts={morePosts}
            settings={settings!}
          />
        }
      >
        <PreviewPostPage
          token={token}
          post={post}
          morePosts={morePosts}
          settings={settings!}
        />
      </PreviewSuspense>
    );
  }

  return (
    <Layout>
      <PostPage post={post} morePosts={morePosts} settings={settings!} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  const token = previewData.token;

  const [settings, { post, morePosts }] = await Promise.all([
    getSettings(),
    getPostAndMoreStories(params.slug, token),
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      morePosts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: 'blocking',
  };
};
