import CoverImage from '@/components/pages/blog/CoverImage';
import { formatDate } from '@/lib/formatDate';
import type { Post } from '@/types/Post';

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'slug'>,
) {
  const { title, coverImage, date, slug } = props;
  return (
    <>
      <h1 className="mb-1 mb-8 text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      <div className="mx-auto mb-8 max-w-2xl sm:mx-0 md:mb-16 ">
        <CoverImage title={title!} image={coverImage} priority slug={slug} />
      </div>
      <div className="mb-6 text-lg">{date && formatDate(date)}</div>
    </>
  );
}
