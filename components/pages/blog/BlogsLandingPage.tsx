import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

import { ShareIcon } from '@/components/icons/ShareIcon';
import { SparklesIcon } from '@/components/icons/SparklesIcon';
import { Layout } from '@/components/layouts/Layout';
import { numberFormat } from '@/lib/numberFormat';
import { urlForImage } from '@/lib/sanity.image';
import type { Post } from '@/types/Post';
import type { Settings } from '@/types/Settings';

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

export const BlogsLandingPage = (props: IndexPageProps) => {
  const { posts } = props;

  return (
    <>
      <Layout>
        <div className="flex flex-col pr-8">
          <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">
            Blogs
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          {posts.map((post: Post) => (
            <Link key={post._id} href={`/blog/${post.slug}`}>
              <div className="card-compact mt-8 h-full overflow-hidden rounded-xl bg-primary-content shadow-sm">
                <Image
                  src={urlForImage(post.coverImage).url()}
                  alt={`Cover Image for ${post.title}`}
                  width={600}
                  height={300}
                  className="aspect-rectangle h-[290px] w-full rounded-xl object-cover"
                />
                <div className="card-body">
                  <h2 className="card-title h-[90px]">{post.title}</h2>
                  <span className="h-[140px] text-sm">
                    {post.excerpt && (
                      <p className="text-md mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  );
};
