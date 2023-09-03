import { toPlainText } from '@portabletext/react';
import BlogPage from 'components/pages/blogs/BlogPage';
import BlogsPagePreview from 'components/pages/blogs/BlogsPagePreview';
import { getBlogs, getProjects, getSettings } from 'lib/sanity.fetch';
import { homePageQuery } from 'lib/sanity.queries';
import { sharedMetadata } from 'lib/utils.metadata';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { LiveQuery } from 'next-sanity/preview/live-query';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  return await sharedMetadata();
}

export default async function IndexRoute() {
  const blogs = await getBlogs();

  if (!blogs && !draftMode().isEnabled) {
    return (
      <div className="text-center">
        You don&rsquo;t have a projects document yet,{' '}
        <Link
          href="/studio/desk/projects%7C%2Cview%3Dpreview"
          className="underline"
        >
          create one now
        </Link>
        !
      </div>
    );
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={homePageQuery}
      initialData={blogs}
      as={BlogsPagePreview}
    >
      <BlogPage data={blogs} />
    </LiveQuery>
  );
}
