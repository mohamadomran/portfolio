import { Header } from 'components/shared/Header';
import { ProjectCard } from 'components/shared/ProjectCard';
import { resolveHref } from 'lib/sanity.links';
import Link from 'next/link';
import type { ProjectsPayload } from 'types';

export interface ProjectsPageProps {
  data: ProjectsPayload[];
}

export function ProjectsPage({ data }) {
  return (
    <div className="space-y-20">
      <Header title="Explore My Work" />

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {data.map((project, key) => {
          const href = resolveHref(project._type, project.slug);
          return <ProjectCard key={key} project={project!} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;
