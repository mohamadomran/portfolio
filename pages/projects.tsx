import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { Layout } from '@/components/layouts/Layout';
import { WORK_SEO_DESCRIPTION, WORK_SEO_TITLE } from '@/constants/constants';
import { getAllProjects } from '@/lib/sanity.client';
import { Project } from '@/types/Project';

interface PageProps {
  projects: Project[];
}

const FeaturedProjects = ({ projects }: PageProps) => {
  return (
    <Layout>
      <NextSeo
        title={WORK_SEO_TITLE}
        description={WORK_SEO_DESCRIPTION}
        twitter={{
          handle: '@itsmohamadomran',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className="flex flex-col pr-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">
          Projects that I&apos;ve Worked On
        </h1>
      </div>
      <Link
        className="flex h-6 items-center rounded-lg pb-8 pt-4 text-primary transition-all hover:text-primary-focus"
        href="/github-projects"
      >
        <p>My Github Projects</p>

        <ArrowRightIcon className="stroke-primary" />
      </Link>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        {projects.map((project: Project) => (
          <div
            key={project._id}
            className="card-compact mt-8 overflow-hidden rounded-xl bg-primary-content shadow-sm"
          >
            <Image
              src={urlForImage(project.coverImage).url()}
              alt={`Cover Image for ${project.title}`}
              width={600}
              height={300}
              className="aspect-rectangle h-[290px] w-full rounded-xl object-cover"
            />
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <span className="h-[140px] text-sm">
                <PortableText value={project.description[0]} />
              </span>
              <div className="card-actions mt-4 justify-end">
                <Link
                  className="btn-secondary btn"
                  href={project.url!}
                  target="_blank"
                >
                  Check {project.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
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
