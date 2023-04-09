import { NextSeo } from 'next-seo'

import { SEO_DESCRIPTION } from '@/constants/constants'
import { Intro } from '@/components/sections/Intro'
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { getFeaturedProject, getBlogs } from '@/sanity/sanity-utils'

import { Project } from '@/types/Project'
import { Blog } from '@/types/Blog'

interface HomeProps {
    project: Project
    blogs: Blog[]

}

const Home = ({ blogs, project }: HomeProps) => {

    return (
        <>
            <NextSeo
                title='Mohamad Omran | Full-Stack Engineer'
                description={SEO_DESCRIPTION}
                twitter={{
                    handle: '@itsmohamadomran',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

            <Intro />
            <FeaturedProject project={project} />
            <FeaturedBlogs blogs={blogs} />
        </>
    )
}

export const getStaticProps = async () => {
    const project = await getFeaturedProject()
    const blogs = await getBlogs()

    return {
        props: {
            project: project[0],
            blogs,
        },
    }
}

export default Home
