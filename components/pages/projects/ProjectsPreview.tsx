'use client';

import { usePreview } from '@/lib/sanity.preview';
import { projectsPageQuery } from '@/lib/sanity.queries';
import type { GalleryItem, ProjectPayload } from '@/types';

import { ProjectsPage } from './ProjectsPage';

export function ProjectsPreview({ token }: { token: null | string }) {
  const gallery: ProjectPayload = usePreview(token, projectsPageQuery);

  return <ProjectsPage images={gallery! as unknown as Array<GalleryItem>} />;
}
