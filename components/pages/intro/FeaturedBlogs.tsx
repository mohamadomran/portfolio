import Link from 'next/link';

import { formatDate } from '@/lib/formatDate';
import { Post } from '@/types/Post';

import { ArrowRightIcon } from '../../icons/ArrowRightIcon';

export const FeaturedBlogs = ({ post }: { post: Post }) => {
  return (
    <div className="py-5">
      <h3 className="z-10 pt-6 text-3xl font-bold tracking-tight md:text-3xl">
        Featured Articles
      </h3>

      <div className="py-5">
        <Link href={`/blog/${post.slug!}`}>
          <div className="flex flex-col justify-between overflow-hidden rounded-xl bg-primary-content py-4 pr-4 leading-normal shadow-lg duration-200">
            <div className="mx-8">
              <div className="flex items-center justify-between">
                <p className="mb-4 text-lg leading-relaxed">{post.excerpt}</p>

                <ArrowRightIcon className="stroke-primary" />
              </div>
              <div className="mb-4 text-lg md:mb-0">
                {new Date(post.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          </div>
        </Link>
      </div>

      <Link
        className="flex h-6 items-center rounded-lg pb-8 pt-8 text-white transition-all hover:text-secondary"
        href="/blog"
      >
        <p>Read more Articles</p>
        <ArrowRightIcon className="stroke-primary" />
      </Link>
    </div>
  );
};
