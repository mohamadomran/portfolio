import { notFound } from 'next/navigation';

import BlogHeader from '@/components/pages/blog/BlogHeader';
import Layout from '@/components/pages/blog/BlogLayout';
import PostBody from '@/components/pages/blog/PostBody';
import PostHeader from '@/components/pages/blog/PostHeader';
import PostPageHead from '@/components/pages/blog/PostPageHead';
import Container from '@/components/pages/sanity/BlogContainer';
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
  const { title } = settings || {};

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview!} loading={loading}>
        <Container>
          <BlogHeader title={title!} level={2} />
          {preview && !post ? (
            <div>Loading</div>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                />
                <PostBody content={post.content} />
              </article>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
