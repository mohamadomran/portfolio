import ProjectsPagePreview from 'components/pages/projects/ProjectPagePreview';
import { ProjectsPage } from 'components/pages/projects/ProjectsPage';
import { getProjects, getSettings } from 'lib/sanity.fetch';
import { homePageQuery } from 'lib/sanity.queries';
import { sharedMetadata } from 'lib/utils.metadata';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { LiveQuery } from 'next-sanity/preview/live-query';

// export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  return await sharedMetadata();
}

export default async function IndexRoute() {
  const projects = await getProjects();

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
