import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Layout } from '@/components/layouts/Layout';
import { FeaturedBlogs } from '@/components/pages/intro/FeaturedBlogs';
import { FeaturedProject } from '@/components/pages/intro/FeaturedProject';
import { Intro } from '@/components/pages/intro/Intro';
import { SEO_DESCRIPTION } from '@/constants/constants';
import {
  getAllPosts,
  getFeaturedtProject,
  getSettings,
} from '@/lib/sanity.client';
import { Post } from '@/types/Post';
import { Project } from '@/types/Project';
import { Settings } from '@/types/Settings';

interface PageProps {
  posts: Post[];
  settings: Settings;
  projects: Project[];
  preview: boolean;
  token: string | null;
}

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

const Home = ({ posts, projects }: PageProps) => {
  const [heroPost] = posts;

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

      <FeaturedProject project={projects[0]} />

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

  const [settings, posts = [], projects = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
    getFeaturedtProject(),
  ]);

  return {
    props: {
      posts,
      projects,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  };
};
