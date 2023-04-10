import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Layout } from '@/components/layouts/Layout';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { Intro } from '@/components/sections/Intro';
import { SEO_DESCRIPTION } from '@/constants/constants';
import { getAllPosts, getSettings } from '@/lib/sanity.client';
import { Post, Settings } from '@/lib/sanity.queries';
import { getBlogs, getFeaturedProject } from '@/sanity/sanity-utils';
import { Blog } from '@/types/Blog';
import { Project } from '@/types/Project';

interface HomeProps {
  project: Project;
  blogs: Blog[];
}

interface PageProps {
  posts: Post[];
  settings: Settings;
  project: Project;
  preview: boolean;
  token: string | null;
}

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

const Home = ({ posts, project }: PageProps) => {
  const [heroPost, ...morePosts] = posts || [];

  return (
    <Layout>
      <NextSeo
        title="Mohamad Omran | Full-Stack Engineer"
        description={SEO_DESCRIPTION}
        twitter={{
          handle: '@itsmohamadomran',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Intro />

      {heroPost && (
        <FeaturedBlogs
          title={heroPost.title}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx;

  const [settings, posts = [], project] = await Promise.all([
    getSettings(),
    getAllPosts(),
    getFeaturedProject(),
  ]);

  return {
    props: {
      posts,
      settings,
      preview,
      project: project[0],
      token: previewData.token ?? null,
    },
  };
};
