import Link from 'next/link';

import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { CustomPortableText } from '@/components/shared/CustomPortableText';
import ImageBox from '@/components/shared/ImageBox';
import type { ShowcaseProject } from '@/types';

interface ProjectProps {
  project: ShowcaseProject;
  odd?: number;
}

export function ProjectListItem(props: ProjectProps) {
  const { project } = props;

  return (
    <>
      <h3 className="pt-6 text-3xl tracking-tight md:text-3xl">
        Featured Project
      </h3>

      <div className="card-compact mt-8 overflow-hidden rounded-2xl bg-primary-content">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="rounded-2xl"
        />

        <div className="card-body mx-4">
          <h2 className="card-title">{project.title!}</h2>

          <CustomPortableText value={project.overview!} />

          <div className="card-actions mt-4 justify-end">
            <Link
              className="btn-outline btn-primary btn"
              href={project.slug!}
              target="_blank"
            >
              Check it out
            </Link>
          </div>
        </div>
      </div>

      <Link
        className="flex h-6 items-center rounded-lg pb-8 pt-8 text-white transition-all hover:text-secondary"
        href="/projects"
      >
        <p>Explore all projects</p>

        <ArrowRightIcon className="stroke-primary" />
      </Link>
    </>
  );
}
