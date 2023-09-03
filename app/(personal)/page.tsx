import { HomePage } from 'components/pages/home/HomePage';
import HomePagePreview from 'components/pages/home/HomePagePreview';
import { getHomePage, getSettings } from 'lib/sanity.fetch';
import { homePageQuery } from 'lib/sanity.queries';
import { sharedMetadata } from 'lib/utils.metadata';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { LiveQuery } from 'next-sanity/preview/live-query';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  return await sharedMetadata();
}

export default async function IndexRoute() {
  const data = await getHomePage();

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={homePageQuery}
      initialData={data}
      as={HomePagePreview}
    >
      <HomePage data={data} />
    </LiveQuery>
  );
}
