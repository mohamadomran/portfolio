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
  settings: Settings;
  projects: Project[];
  posts: Post[];
}

const Home = ({ posts, projects }: PageProps) => {
  const [featuredBlog] = posts;
  const [featuredProject] = projects;
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
      <FeaturedProject project={featuredProject} />
      <FeaturedBlogs post={featuredBlog} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetStaticProps<PageProps> = async (ctx) => {
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
    },
  };
};
