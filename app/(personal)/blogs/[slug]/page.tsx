import { toPlainText } from '@portabletext/react';
import { Blog } from 'components/pages/blog/Blog';
import BlogPreview from 'components/pages/blog/BlogPreview';
import {
  getBlogBySlug,
  getBlogsPaths,
  getHomePageTitle,
  getSettings,
} from 'lib/sanity.fetch';
import { blogsBySlugQuery } from 'lib/sanity.queries';
import { sharedMetadata } from 'lib/utils.metadata';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { LiveQuery } from 'next-sanity/preview/live-query';

export const runtime = 'edge';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const [settings, blog, homePageTitle] = await Promise.all([
    getSettings(),
    getBlogBySlug(slug),
    getHomePageTitle(),
  ]);

  //TODO: Replace title with blog's title
  return await sharedMetadata();
}

export async function generateStaticParams() {
  const slugs = await getBlogsPaths();
  return slugs.map((slug) => ({ slug }));
}

export default async function PageSlugRoute({ params }: Props) {
  const data = await getBlogBySlug(params.slug);

  if (!data && !draftMode().isEnabled) {
    notFound();
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={blogsBySlugQuery}
      params={params}
      initialData={data}
      as={BlogPreview}
    >
      <Blog data={data} />
    </LiveQuery>
  );
}
