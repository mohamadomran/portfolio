import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/types/Project';

export const ProjectCard = ({ project }: { project: Project }) => {
  const { name, image, url, content } = project;

  return (
    <div className="card-compact mt-8 overflow-hidden rounded-xl bg-base-100 bg-primary-content shadow-xl">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="aspect-rectangle h-full w-full rounded-t-lg object-cover"
      />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <PortableText value={content} />
        <div className="card-actions mt-4 justify-end">
          <Link
            className="btn-outline btn-primary btn"
            href={url}
            target="_blank"
          >
            Check it out
          </Link>
        </div>
      </div>
    </div>
  );
};
