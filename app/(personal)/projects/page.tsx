import { notFound } from 'next/navigation';

import { ProjectsPage } from '@/components/pages/projects/ProjectsPage';
import { ProjectsPreview } from '@/components/pages/projects/ProjectsPreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getProjectsPage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';
import { GalleryItem, ProjectPayload } from '@/types';

export default async function Projects() {
  const token = getPreviewToken();
  const projects = (await getProjectsPage({ token })) || [];

  if (!projects && !token) {
    notFound();
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <ProjectsPage projects={projects! as unknown as Array<ProjectPayload>} />
            </PreviewWrapper>
          }
        >
          <ProjectsPreview token={token} />
        </PreviewSuspense>
      ) : (
        <ProjectsPage projects={projects! as unknown as Array<ProjectPayload>} />
      )}
    </>
  );
}
