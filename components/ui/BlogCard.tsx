import Link from 'next/link';
import { Blog } from '@/types/Blog';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';

export const BlogCard = ({ blog }: { blog: Blog; }) => {
  return (
    <div className="py-5">
      <Link href={`/blog/${blog.slug.current}`}>
        <div className="rounded-xl overflow-hidden bg-primary-content shadow-lg duration-200 pr-4 py-4 flex flex-col justify-between leading-normal">
          <div className="mx-8">
            <div className="flex justify-between items-center text-lg font-semibold text-white">
              <p>{blog.title}</p>

              <ArrowRightIcon className="stroke-primary" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
