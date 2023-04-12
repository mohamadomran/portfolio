import Link from 'next/link';

import CoverImage from '@/components/pages/blog/CoverImage';
import Date from '@/components/pages/blog/PostDate';
import type { Post } from '@/types/Post';

export default function HeroPost(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'excerpt' | 'slug'>,
) {
  const { title, coverImage, date, excerpt, slug } = props;
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title!} image={coverImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/blog/${slug}`} className="hover:underline">
              {title || 'Untitled'}
            </Link>
          </h3>

          <Date dateString={date!} />
        </div>
        <div>
          {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
        </div>
      </div>
    </section>
  );
}
