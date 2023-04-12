import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { NextSeo } from 'next-seo';

import Layout from '@/components/pages/blog/BlogLayout';
import PostHeader from '@/components/pages/blog/PostHeader';
import type { Post } from '@/types/Post';
import type { Settings } from '@/types/Settings';

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

      <Layout preview={preview!} loading={loading}>
        {preview && !post ? (
          <div>Loading</div>
        ) : (
          <>
            <article className="text-white [&>p]:mt-12">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PortableText value={post.content} />
            </article>
          </>
        )}
      </Layout>
    </>
  );
}