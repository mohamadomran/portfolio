import Link from 'next/link';

import { Project } from '@/types/Project';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import { ProjectCard } from '../ui/ProjectCard';

export const FeaturedProject = ({ project }: { project: Project }) => {
    return (
        <div className='py-1'>
            <h3 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white z-10'>
                Featured Project
            </h3>

            <ProjectCard project={project} />

            <Link
                className='flex items-center pt-8 pb-8 text-primary rounded-lg hover:text-secondary transition-all h-6'
                href='/projects'>
                <p>Explore all projects</p>

                <ArrowRightIcon className='stroke-primary' />
            </Link>
        </div>
    );
};
