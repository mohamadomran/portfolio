import Link from 'next/link';

import Date from '@/components/ui/PostDate';
import { Post } from "@/types/Post";

import { ArrowRightIcon } from '../icons/ArrowRightIcon';

export const FeaturedBlogs = (
  props: Pick<Post, 'title' | 'date' | 'excerpt' | 'slug'>,
) => {
  const { title, date, excerpt, slug } = props;

  return (
    <div className="py-5">
      <h3 className="z-10 pt-6 text-3xl font-bold tracking-tight md:text-3xl">
        Featured Articles
      </h3>

      <div className="py-5">
        <Link href={`/post/${slug}`}>
          <div className="flex flex-col justify-between overflow-hidden rounded-xl bg-primary-content py-4 pr-4 leading-normal shadow-lg duration-200">
            <div className="mx-8">
              <div className="flex items-center justify-between text-lg font-semibold text-white">
                <p>{title}</p>
              </div>
              <div className="flex items-center justify-between">
                {excerpt && (
                  <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
                )}
                <ArrowRightIcon className="stroke-primary" />
              </div>
              <div className="mb-4 text-lg md:mb-0">
                <Date dateString={date!} />
              </div>
            </div>
          </div>
        </Link>
      </div>

      <Link
        className="flex h-6 items-center rounded-lg pb-8 pt-8 text-primary transition-all hover:text-secondary"
        href="/blog"
      >
        <p>Read more Articles</p>
        <ArrowRightIcon className="stroke-primary" />
      </Link>
    </div>
  );
};
