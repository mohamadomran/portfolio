import Link from 'next/link';

import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { ProjectCard } from '@/components/pages/projects/ProjectCard';
import { Project } from '@/types/Project';

export const FeaturedProject = ({ project }: { project: Project }) => {
  return (
    <div className="py-1">
      <h3 className="z-10 pt-6 text-3xl font-bold tracking-tight md:text-3xl">
        Featured Project
      </h3>

      <ProjectCard project={project} />

      <Link
        className="flex h-6 items-center rounded-lg pb-8 pt-8 text-white transition-all hover:text-secondary"
        href="/projects"
      >
        <p>Explore all projects</p>

        <ArrowRightIcon className="stroke-primary" />
      </Link>
    </div>
  );
};
