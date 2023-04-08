import Link from 'next/link';
import { BlogCard } from '../ui/BlogCard';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import { Blog } from '@/types/Blog';

export const FeaturedBlogs = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <div className='py-5'>
            <h3 className='font-bold text-3xl md:text-3xl tracking-tight pt-6 z-10'>
                Featured Articles
            </h3>

            {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
            ))}

            <Link
                className='flex items-center pt-8 pb-8 text-primary rounded-lg hover:text-secondary transition-all h-6'
                href='/blogs'>
                <p>Read more Articles</p>

                <ArrowRightIcon className='stroke-primary' />
            </Link>
        </div>
    );
};
