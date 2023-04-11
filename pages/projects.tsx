import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { GridLayout } from '@/components/layouts/Grid_Layout';
import { getAllProjects } from '@/lib/sanity.client';
import { Project } from '@/types/Project';

interface PageProps {
  projects: Project[];
}

const FeaturedProjects = ({ projects }: PageProps) => {

  return (
    <GridLayout>
      <Head>
        <title>Featured Projects - Mohamad Omran</title>
        <meta name="description" content="Featured Projects" />
        <meta property="og:title" content="Projects - Mohamad Omran" />
        <meta property="og:description" content="Featured Projects" />
      </Head>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project: Project) => (
          <div key={project._id} className="mt-8 shadow-sm card rounded-xl bg-primary-content">
            <Image
              src={urlForImage(project.coverImage).height(1000).width(2000).url()}
              alt={`Cover Image for ${project.title}`}
              width={400}
              height={300}
              className="aspect-rectangle w-full h-full rounded-t-lg object-cover"
            />
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>

              <PortableText value={project.description[0]} />

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
    </GridLayout >
  );
};

export default FeaturedProjects;

export const getStaticProps: GetStaticProps<
  PageProps
> = async (ctx) => {

  const [projects = []] = await Promise.all([
    getAllProjects(),
  ]);

  return {
    props: {
      projects,
    },
  };
};
