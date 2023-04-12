import { NextSeo } from 'next-seo';

import BlogHeader from '@/components/pages/blog/BlogHeader';
import Layout from '@/components/pages/blog/BlogLayout';
import HeroPost from '@/components/pages/blog/HeroPost';
import { BLOG_SEO_TITLE } from '@/constants/constants';
import { BLOG_SEO_DESCRIPTION } from '@/constants/constants';
import type { Post } from '@/types/Post';
import type { Settings } from '@/types/Settings';

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

export default function BlogIndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props;
  const [heroPost] = posts || [];
  const { title, description } = settings || {};

  return (
    <>
      <Layout preview={preview!} loading={loading}>
        <BlogHeader title={title!} description={description} />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      </Layout>
    </>
  );
}
