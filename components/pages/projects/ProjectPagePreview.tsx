'use client';

import dynamic from 'next/dynamic';

import type { ProjectsPageProps } from './ProjectsPage';

const ProjectsPage = dynamic(() => import('./ProjectsPage'));

export default function ProjectsPagePreview({ data }: ProjectsPageProps) {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    );
  }

  return <ProjectsPage data={data} />;
}
