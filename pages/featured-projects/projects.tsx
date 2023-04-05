import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import { getProjects } from '@/Utils/sanity-utils';
import { SimpleLayout } from '@/components/layouts/SimpleLayout';
import Link from 'next/link';
import { Project } from '@/types/Project';

export default function FeaturedProjects({ projects }: { projects: Project[]}) {
    return (
        <>
            <Head>
                <title>Featured Projects - Mohamad Omran</title>
                <meta
                    name='description'
                    content='Featured Projects'
                />
                <meta property='og:title' content='Projects - Mohamad Omran' />
                <meta
                    property='og:description'
                    content='Featured Projects'
                />
            </Head>
            <SimpleLayout
                title='Featured Projects'
                gradient='bg-gradient-to-r from-sky-400 to-blue-500'>
                <div className='mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {projects.map((project: Project) => (
                        <Link
                            href={`/projects/${project.slug}`}
                            key={project._id}
                            className='rounded-lg border-2 border-gray-500 p-1 transition hover:scale-105 hover:border-blue-500'>
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={750}
                                    height={300}
                                    className='rounded-lg border border-gray-500 object-cover'
                                />
                            )}
                            <div className='mt-2 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text font-extrabold text-transparent'>
                                {project.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </SimpleLayout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            projects: (await getProjects()) || [],
        }
    }
}
