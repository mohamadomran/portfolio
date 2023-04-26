'use client';

import { usePreview } from '@/lib/sanity.preview';
import { projectsPageQuery } from '@/lib/sanity.queries';
import type { ProjectPayload } from '@/types';

import { ProjectsPage } from './ProjectsPage';

export function ProjectsPreview({ token }: { token: null | string }) {
  const projects: ProjectPayload = usePreview(token, projectsPageQuery);

  return (
    <ProjectsPage projects={projects! as unknown as Array<ProjectPayload>} />
  );
}
