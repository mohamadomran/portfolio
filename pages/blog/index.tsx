import { NextSeo } from 'next-seo';

import { Card } from '@/components/ui/Card';

import { BlogCard } from '@/components/ui/BlogCard';

import { formatDate } from '@/lib/formatDate';
import { Article } from '@/types/Article';
import { getBlogs } from '@/sanity/sanity-utils';
import { Blog } from '@/types/Blog';
import { BLOG_SEO_DESCRIPTION, BLOG_SEO_TITLE } from '@/constants/constants';

const Blog = ({ article }: { article: Article }) => {
  return (
    <article>
      <Card variant="inline">
        <Card.Title href={`/writing/${article.slug}`}>
          {article.title}
        </Card.Title>
        <p className="flex order-first space-x-1 z-10 mb-3 md:mb-0 md:ml-4 md:order-last flex-shrink-0">
          <Card.Eyebrow as="time" dateTime={article.date} decorate={false}>
            {formatDate(article.date)}
          </Card.Eyebrow>
        </p>
      </Card>
    </article>
  );
};

const BlogIndex = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <>
      <NextSeo title={BLOG_SEO_TITLE} description={BLOG_SEO_DESCRIPTION} />

      <div className="flex flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1">
            Blog
          </h1>
          <h2 className="mb-4">
            I offer insights on a broad range of tech-related topics, covering
            the latest trends and providing in-depth analyses and personal
            stories.
          </h2>
        </div>
      </div>

      <div className="max-w-3xl space-y-16 mt-6 bg-grey rounded-lg">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </>
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
