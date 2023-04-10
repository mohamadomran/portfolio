import { usePreview } from 'lib/sanity.preview';
import { featuredBlogsQuery, settingsQuery } from 'lib/sanity.queries';

import IndexPage from '@/components/ui/IndexPage';
import { type Post } from '@/types/Post';
import { type Settings } from '@/types/Settings';

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, featuredBlogsQuery) || [];
  const settings: Settings = usePreview(token, settingsQuery) || {};

  return <IndexPage preview posts={posts} settings={settings} />;
}
