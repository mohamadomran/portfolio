import Link from 'next/link';

import { Blog } from '@/types/Blog';

import { ArrowRightIcon } from '../icons/ArrowRightIcon';

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="py-5">
      <Link href={`/post/${blog.slug.current}`}>
        <div className="flex flex-col justify-between overflow-hidden rounded-xl bg-primary-content py-4 pr-4 leading-normal shadow-lg duration-200">
          <div className="mx-8">
            <div className="flex items-center justify-between text-lg font-semibold text-white">
              <p>{blog.title}</p>

              <ArrowRightIcon className="stroke-primary" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
