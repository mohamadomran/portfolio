import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { CustomPortableText } from '@/components/shared/CustomPortableText';
import { urlForImage } from '@/lib/sanity.image';
import type { ShowcaseProject } from '@/types';

interface ProjectProps {
  project: ShowcaseProject;
  odd?: number;
}

export function ProjectListItem(props: ProjectProps) {
  const { project } = props;

  const imageUrl =
    project.coverImage &&
    urlForImage(project.coverImage)?.height(1200).width(2100).url();
  return (
    <>
      <h3 className="pt-6 text-3xl tracking-tight md:text-3xl">
        Featured Project
      </h3>

      <div className="card mt-8 bg-secondary-content shadow-xl lg:card-side">
        <div className={`overflow-hidden rounded-2xl lg:w-[50%]`}>
          {imageUrl && (
            <Image
              className="aspect-rectangle h-full w-full object-cover"
              alt={project.title!}
              width="2100"
              height="1200"
              src={imageUrl}
            />
          )}
        </div>

        <div className="card-body lg:w-[50%] ">
          <h2 className="card-title">{project.title!}</h2>
          <CustomPortableText value={project.overview!} />
          <div className="card-actions justify-end">
            <Link
              className="btn-primary btn"
              href={project.site!}
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
