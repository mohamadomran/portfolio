import type { Post } from 'lib/sanity.queries';

import CoverImage from '@/components/ui/CoverImage';
import Date from '@/components/ui/PostDate';
import PostTitle from '@/components/ui/PostTitle';

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'slug'>,
) {
  const { title, coverImage, date, slug } = props;
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title!} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-lg">
          <Date dateString={date!} />
        </div>
      </div>
    </>
  );
}
