import { usePreview } from 'lib/sanity.preview';
import { featuredBlogsQuery, settingsQuery } from 'lib/sanity.queries';

import { BlogsLandingPage } from '@/components/pages/blog/BlogsLandingPage';
import { type Post } from '@/types/Post';
import { type Settings } from '@/types/Settings';

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, featuredBlogsQuery) || [];
  const settings: Settings = usePreview(token, settingsQuery) || {};

  return <BlogsLandingPage preview posts={posts} settings={settings} />;
}
