import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { GridLayout } from '@/components/layouts/Grid_Layout';
import { WORK_SEO_DESCRIPTION, WORK_SEO_TITLE } from '@/constants/constants';
import { getAllProjects } from '@/lib/sanity.client';
import { Project } from '@/types/Project';

interface PageProps {
  projects: Project[];
}

const FeaturedProjects = ({ projects }: PageProps) => {
  return (
    <GridLayout>
      <NextSeo
        title={WORK_SEO_TITLE}
        description={WORK_SEO_DESCRIPTION}
        twitter={{
          handle: '@itsmohamadomran',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className="flex flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">
            Featured Projects
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project: Project) => (
          <div
            key={project._id}
            className="card mt-8 rounded-xl bg-primary-content shadow-sm"
          >
            <Image
              src={urlForImage(project.coverImage).url()}
              alt={`Cover Image for ${project.title}`}
              width={600}
              height={500}
              className="aspect-rectangle h-full w-full rounded-t-lg object-cover"
            />
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <span className="text-sm">
                <PortableText value={project.description[0]} />
              </span>
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
        ))}
      </div>
    </GridLayout>
  );
};

export default FeaturedProjects;

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const [projects = []] = await Promise.all([getAllProjects()]);

  return {
    props: {
      projects,
    },
  };
};
