import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/types/Project';

export const ProjectCard = ({ project }: { project: Project }) => {
  const { title, coverImage: source, url, description } = project;

  console.log(project);

  return (
    <div className="card-compact mt-8 overflow-hidden rounded-xl bg-base-100 bg-primary-content shadow-xl">
      <Image
        src={urlForImage(source).height(1000).width(2000).url()}
        alt={`Cover Image for ${title}`}
        width={400}
        height={300}
        className="aspect-rectangle h-full w-full rounded-t-lg object-cover"
      />
      <div className="card-body">
        <h2 className="card-title">{title!}</h2>

        <PortableText value={description[0]} />

        <div className="card-actions mt-4 justify-end">
          <Link
            className="btn-outline btn-primary btn"
            href={url!}
            target="_blank"
          >
            Check it out
          </Link>
        </div>
      </div>
    </div>
  );
};
