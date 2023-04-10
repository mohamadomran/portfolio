import { urlForImage } from 'lib/sanity.image';
import Head from 'next/head';

import BlogMeta from '@/components/ui/BlogMeta';
import { Post } from '@/types/Post';
import { Settings } from '@/types/Settings';

export interface PostPageHeadProps {
  settings: Settings;
  post: Post;
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
  const title = settings.title!;
  return (
    <Head>
      <title>{post.title ? `${post.title} | ${title}` : title}</title>
      <BlogMeta />
      {post.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </Head>
  );
}
