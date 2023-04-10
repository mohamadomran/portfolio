import type { Settings } from "@/types/Settings";
import { notFound } from 'next/navigation';

import Container from '@/components/ui/BlogContainer';
import BlogHeader from '@/components/ui/BlogHeader';
import Layout from '@/components/ui/BlogLayout';
import MoreStories from '@/components/ui/MoreStories';
import PostBody from '@/components/ui/PostBody';
import PostHeader from '@/components/ui/PostHeader';
import PostPageHead from '@/components/ui/PostPageHead';
import PostTitle from '@/components/ui/PostTitle';
import SectionSeparator from '@/components/ui/SectionSeparator';
import type { Post } from "@/types/Post";

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  morePosts: Post[];
  settings: Settings;
}

const NO_POSTS: Post[] = [];

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props;
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
            <PostTitle>Loading…</PostTitle>
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
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
