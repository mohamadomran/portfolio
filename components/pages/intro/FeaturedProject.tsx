import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { Project } from '@/types/Project';

export const FeaturedProject = ({ project }: { project: Project }) => {
  return (
    <div className="py-1">
      <h3 className="z-10 pt-6 text-3xl font-bold tracking-tight md:text-3xl">
        Featured Project
      </h3>

      <div className="card-compact mt-8 overflow-hidden rounded-xl bg-base-100 bg-primary-content shadow-xl">
        <Image
          src={urlForImage(project.coverImage!).url()!}
          alt={`Cover Image for ${project.title!}`}
          width={400}
          height={300}
          className="aspect-rectangle h-full w-full rounded-t-lg object-cover"
        />
        <div className="card-body">
          <h2 className="card-title">{project.title!}</h2>

          <PortableText value={project.description[0]!} />

          <div className="card-actions mt-4 justify-end">
            <Link
              className="btn-outline btn-primary btn"
              href={project.url!}
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
    </div>
  );
};
