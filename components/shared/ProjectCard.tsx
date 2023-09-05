'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
} from '@nextui-org/react';
import { urlForImage } from 'lib/sanity.image';
import { resolveHref } from 'lib/sanity.links';
import type { ShowcaseProject } from 'types';

interface ProjectProps {
  project: ShowcaseProject;
}

export function ProjectCard({ project }: ProjectProps) {
  const imageUrl =
    project.coverImage &&
    urlForImage(project.coverImage)?.height(1200).width(2000).url();
  const href = resolveHref(project._type, project.slug);
  return (
    <Card shadow="lg" isPressable isFooterBlurred>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={`${project.title} cover image`}
          className="z-0 w-full object-contain h-full"
          src={imageUrl}
          removeWrapper
        />
      </CardBody>
      <CardFooter className="text-small justify-start  absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 px-3">
        <Button
          href={project.site}
          as={Link}
          showAnchorIcon
          variant="faded"
          className="justify-end"
        >
          Check {project.title}
        </Button>
      </CardFooter>
    </Card>
  );
}
