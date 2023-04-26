import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components/global/Layout';
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
    <Layout>
      <h2 className="pt-6 text-4xl">Featured Project</h2>

      <Link
        className="group mt-4 inline-flex items-center gap-1 text-xl font-bold text-secondary transition-colors hover:text-primary"
        href="/projects"
      >
        Browse all projects
        <ArrowRightIcon className="stroke-primary" />
      </Link>

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
    </Layout>
  );
}
