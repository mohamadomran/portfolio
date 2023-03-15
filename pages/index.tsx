import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Resume } from '@/components/ui/Resume'
import { Container } from '@/components/Container'
import {
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
} from '@/components/icons/SocialIcons'
import { SocialLink } from '@/components/ui/SocialLink'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { generateSitemap } from '@/lib/generateSitemap'
import { getAllArticles } from '@/lib/getAllArticles'
import { Article as ArticleType } from 'types'
import { SEO_DESCRIPTION, SEO_TITLE } from '@/Utils/constants'
import { Article } from '@/components/ui/Article'

export default function Home({ articles }: { articles: ArticleType[] }) {
    return (
        <>
            <Head>
                <title>Portfolio | Mohamad Omran</title>
                <meta name='description' content={SEO_DESCRIPTION} />
                <meta
                    property='og:url'
                    content={`${process.env.NEXT_PUBLIC_SITE_URL}`}
                />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={SEO_TITLE} />
                <meta property='og:description' content={SEO_DESCRIPTION} />
                <meta property='og:image' content='/static/images/avatar.png' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta property='twitter:domain' content='mohamadomran.dev' />
                <meta
                    property='twitter:url'
                    content={`${process.env.NEXT_PUBLIC_SITE_URL}`}
                />
                <meta name='twitter:title' content={SEO_TITLE} />
                <meta name='twitter:description' content={SEO_DESCRIPTION} />
                <meta
                    name='twitter:image'
                    content='/static/images/photo-of-me-og.jpg'
                />
            </Head>

            <Container className='mt-9'>
                <div className='max-w-4xl'>
                    <h1 className='text-5xl font-bold text-zinc-800 dark:sky-300 sm:text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-mustard-500 to-mustard-300'>
                        Hi, I&apos;m Mohamad!
                    </h1>
                    <p className='max-w-2xl text-xl mt-6 text-base text-zinc-600 dark:text-white'>
                        As an experienced full-stack software engineer
                        specializing in AI and machine learning, I am committed
                        to developing innovative solutions to complex problems,
                        and bringing fresh ideas to life through technology.
                        Outside of work, I enjoy exploring new destinations with
                        my camera, capturing the beauty of the world through
                        photography.If you&apos;re in need of a talented
                        developer or simply interested in browsing my portfolio,
                        I invite you to take a closer look and discover how I
                        can help bring your ideas to fruition.
                    </p>
                    <div className='mt-6 flex gap-6'>
                        <SocialLink
                            href='https://github.com/mohamadomran'
                            ariaLabel='Follow on GitHub'
                            icon={GitHubIcon}
                        />
                        <SocialLink
                            href='https://linkedin.com/in/mohamad-omran/'
                            ariaLabel='Follow on LinkedIn'
                            icon={LinkedInIcon}
                        />
                        <SocialLink
                            href='https://twitter.com/itsMohamadomran'
                            ariaLabel='Follow on Twitter'
                            icon={TwitterIcon}
                        />
                    </div>
                </div>
            </Container>
            <Container className='mt-24 md:mt-28'>
                <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
                    <div className='flex flex-col gap-20'>
                        {articles.map(({ slug, title, description, date }) => (
                            <Article
                                key={slug}
                                title={title}
                                description={description}
                                slug={slug}
                                date={date}
                            />
                        ))}
                    </div>
                    <div className='space-y-10 lg:pl-16 xl:pl-24'>
                        <Resume />
                    </div>
                </div>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    if (process.env.NODE_ENV === 'production') {
        await generateRssFeed()
        await generateSitemap()
    }

    return {
        props: {
            articles: (await getAllArticles())
                .slice(0, 3)
                .map(({ component, ...meta }) => meta),
        },
    }
}
