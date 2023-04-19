import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { NextSeo } from 'next-seo';

import { Layout } from '@/components/layouts/Layout';
import { formatDate } from '@/lib/formatDate';
import type { Post } from '@/types/Post';
import type { Settings } from '@/types/Settings';

import CoverImage from './CoverImage';

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  settings: Settings;
}

export default function PostPage(props: PostPageProps) {
  const { preview, loading, post, settings } = props;

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }

  const components = {
    block: {
      h1: ({ children }: any) => <h1 className="text-4xl">{children}</h1>,
    },
    marks: {
      code: ({ children }: any) => (
        <code className="rounded-lg bg-primary-content px-2">{children}</code>
      ),
    },
  };

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: post.coverImage,
              width: 800,
              height: 600,
              alt: post.title,
            },
          ],
        }}
      />

      <Layout>
        {preview && !post ? (
          <div>Loading</div>
        ) : (
          <>
            <article className="text-white [&>p]:mt-12">
              <h1 className="mb-1 mb-8 text-3xl font-bold tracking-tight md:text-5xl">
                {post.title}
              </h1>

              <div className="mx-auto mb-8 max-w-2xl sm:mx-0 md:mb-16 ">
                <CoverImage
                  title={post.title}
                  image={post.coverImage}
                  priority
                  slug={post.slug}
                />
              </div>
              <div className="mb-6 text-lg">
                {new Date(post.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
              </div>
              <PortableText value={post.content} components={components} />
            </article>
          </>
        )}
      </Layout>
    </>
  );
}
