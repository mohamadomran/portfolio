import { toPlainText } from '@portabletext/react';
import ProjectsPagePreview from 'components/pages/projects/ProjectPagePreview';
import { ProjectsPage } from 'components/pages/projects/ProjectsPage';
import { getProjects, getSettings } from 'lib/sanity.fetch';
import { homePageQuery } from 'lib/sanity.queries';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { LiveQuery } from 'next-sanity/preview/live-query';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  return await sharedMetaData();
}

export default async function IndexRoute() {
  const projects = await getProjects();

  if (!projects && !draftMode().isEnabled) {
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
      initialData={projects}
      as={ProjectsPagePreview}
    >
      <ProjectsPage data={projects} />
    </LiveQuery>
  );
}
function sharedMetaData(): Metadata | PromiseLike<Metadata> {
  throw new Error('Function not implemented.');
}
