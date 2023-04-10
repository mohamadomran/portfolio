import Container from '@/components/ui/BlogContainer';
import BlogHeader from '@/components/ui/BlogHeader';
import Layout from '@/components/ui/BlogLayout';
import HeroPost from '@/components/ui/HeroPost';
import IndexPageHead from '@/components/ui/IndexPageHead';
import MoreStories from '@/components/ui/MoreStories';
import type { Post } from '@/types/Post';
import type { Settings } from '@/types/Settings';

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props;
  const [heroPost] = posts || [];
  const { title, description } = settings || {};

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview!} loading={loading}>
        <Container>
          <BlogHeader title={title!} description={description} level={1} />
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        </Container>
      </Layout>
    </>
  );
}
