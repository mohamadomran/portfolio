import { PortableText } from '@portabletext/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components/layouts/Layout';
import { getAllProjects } from '@/lib/sanity.client';
import { Project } from '@/types/Project';

export default function FeaturedProjects({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <Layout>
      <Head>
        <title>Featured Projects - Mohamad Omran</title>
        <meta name="description" content="Featured Projects" />
        <meta property="og:title" content="Projects - Mohamad Omran" />
        <meta property="og:description" content="Featured Projects" />
      </Head>
      {/* <div className="mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project) => (
          <Link
            href={project.url}
            key={project._id}
            className="rounded-lg border-2 border-gray-500 p-1 transition hover:scale-105 hover:border-blue-500"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="rounded-lg border border-gray-500 object-cover"
              />
            )}
            <div className="mt-2 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text font-extrabold text-transparent">
              {project.name}
            </div>

            <div className="mt-5 text-lg text-gray-700">
              <PortableText value={project.content} />
            </div>
          </Link>
        ))}
      </div> */}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      projects: await getAllProjects(),
    },
  };
};
