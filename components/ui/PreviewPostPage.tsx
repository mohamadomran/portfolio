import { allBlogsQuery } from 'lib/sanity.queries';

import PostPage, { PostPageProps } from '@/components/ui/PostPage';
import { type Post } from "@/types/Post";
import { usePreview } from '@/lib/sanity.preview';

export default function PreviewPostPage({
  token,
  post,
  settings,
}: {
  token: null | string;
} & PostPageProps) {
  const { post: postPreview, morePosts }: { post: Post; morePosts: Post[]; } =
    usePreview(token, allBlogsQuery, {
      slug: post.slug,
    }) || { post: null, morePosts: [] };

  return (
    <PostPage
      preview
      post={postPreview}
      morePosts={morePosts}
      settings={settings}
    />
  );
}
