import { NextSeo } from 'next-seo';

import { Layout } from '@/components/layouts/Layout';
import { BlogCard } from '@/components/ui/BlogCard';
import { Card } from '@/components/ui/Card';
import { BLOG_SEO_DESCRIPTION, BLOG_SEO_TITLE } from '@/constants/constants';
import { formatDate } from '@/lib/formatDate';
import { getBlogs } from '@/sanity/sanity-utils';
import { Article } from '@/types/Article';
import { Blog } from '@/types/Blog';

const Blog = ({ article }: { article: Article; }) => {
  return (
    <article>
      <Card variant="inline">
        <Card.Title href={`/writing/${article.slug}`}>
          {article.title}
        </Card.Title>
        <p className="z-10 order-first mb-3 flex flex-shrink-0 space-x-1 md:order-last md:mb-0 md:ml-4">
          <Card.Eyebrow as="time" dateTime={article.date} decorate={false}>
            {formatDate(article.date)}
          </Card.Eyebrow>
        </p>
      </Card>
    </article>
  );
};

const BlogIndex = ({ blogs }: { blogs: Blog[]; }) => {
  return (
    <Layout>
      <NextSeo title={BLOG_SEO_TITLE} description={BLOG_SEO_DESCRIPTION} />

      <div className="flex flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">
            Blog
          </h1>
          <h2 className="mb-4">
            I offer insights on a broad range of tech-related topics, covering
            the latest trends and providing in-depth analyses and personal
            stories.
          </h2>
        </div>
      </div>

      <div className="bg-grey mt-6 max-w-3xl space-y-16 rounded-lg">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const getStaticProps = async () => {
  const blogs = await getBlogs();

  return {
    props: {
      blogs,
    },
    revalidate: 1,
  };
};
