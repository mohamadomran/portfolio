import CoverImage from '@/components/pages/blog/CoverImage';
import Date from '@/components/pages/blog/PostDate';
import type { Post } from '@/types/Post';

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'slug'>,
) {
  const { title, coverImage, date, slug } = props;
  return (
    <>
      Title: {title}
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
