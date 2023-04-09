import Image from 'next/image'
import Link from 'next/link'

import { PortableText } from '@portabletext/react'
import { Project } from '@/types/Project'

export const ProjectCard = ({ project }: { project: Project }) => {
    const { name, image, url, content } = project

    return (
        <div className='card-compact shadow-xl mt-8 bg-base-100 rounded-xl overflow-hidden bg-primary-content'>
            <Image
                src={image}
                alt={name}
                width={400}
                height={300}
                className='aspect-rectangle rounded-t-lg w-full h-full object-cover'
            />
            <div className='card-body'>
                <h2 className='card-title'>{name}</h2>
                <PortableText value={content} />
                <div className='card-actions justify-end mt-4'>
                    <Link
                        className='btn btn-outline btn-primary'
                        href={url}
                        target='_blank'>
                        Check it out
                    </Link>
                </div>
            </div>
        </div>
    )
}
