import { allBlogsQuery } from 'lib/sanity.queries';

import PostPage, { PostPageProps } from '@/components/ui/PostPage';
import { usePreview } from '@/lib/sanity.preview';
import { type Post } from '@/types/Post';

export default function PreviewPostPage({
  token,
  post,
  settings,
}: {
  token: null | string;
} & PostPageProps) {
  const { post: postPreview }: { post: Post; } =
    usePreview(token, allBlogsQuery, {
      slug: post.slug,
    }) || { post: null };

  return (
    <PostPage
      preview
      post={postPreview}
      settings={settings}
    />
  );
}
