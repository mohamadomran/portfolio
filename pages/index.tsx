import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Card } from '@/components/ui/Card'
import { Resume } from '@/components/ui/Resume'
import { Container } from '@/components/Container'
import {
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
} from '@/components/icons/SocialIcons'
import { SocialLink } from '@/components/ui/SocialLink'
import { Views } from '@/components/ui/Views'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { generateSitemap } from '@/lib/generateSitemap'
import { getAllArticles } from '@/lib/getAllArticles'
import { Article } from 'types'
import { SEO_DESCRIPTION, SEO_TITLE } from '@/Utils/constants'

function Article(article: Article) {
    return (
        <article>
            <Card>
                <Card.Title href={`/writing/${article.slug}`}>
                    {article.title}
                </Card.Title>
                <p className='flex order-first space-x-1 z-10 mb-3'>
                    <Card.Eyebrow
                        as='time'
                        dateTime={article.date}
                        decorate={false}>
                        {formatDate(article.date)}
                    </Card.Eyebrow>
                    <Views
                        slug={article.slug}
                        shouldUpdateViews={false}
                        className='text-sm text-zinc-500 dark:text-zinc-400'
                    />
                </p>
            </Card>
        </article>
    )
}

export default function Home({ articles }: { articles: Article[] }) {
    return (
        <>
            <Head>
                <title>Portfolio | Mohamad Omran</title>
                <meta name='description' content={SEO_DESCRIPTION} />
                <meta property='og:url' content={`${process.env.NEXT_PUBLIC_SITE_URL}`} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={SEO_TITLE} />
                <meta property='og:description' content={SEO_DESCRIPTION} />
                <meta property='og:image' content='/static/images/avatar.png' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta property='twitter:domain' content='mohamadomran.dev' />
                <meta property='twitter:url' content={`${process.env.NEXT_PUBLIC_SITE_URL}`} />
                <meta name='twitter:title' content={SEO_TITLE} />
                <meta name='twitter:description' content={SEO_DESCRIPTION} />
                <meta name='twitter:image' content='/static/images/photo-of-me-og.jpg' />
            </Head>

            <Container className='mt-9'>
                <div className='max-w-2xl'>
                    <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:sky-300 sm:text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-blue-500 via-sky-500 to-blue-300'>
                        Hi, I&apos;m Mohamad!
                    </h1>
                    <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                        I&apos;m a full-stack software engineer with expertise
                        in AI and machine learning. I&apos;m passionate about
                        creating innovative solutions to complex problems and
                        bringing new ideas to life through technology. When
                        I&apos;m not coding, you can find me exploring new
                        places with my camera in hand, capturing the beauty of
                        the world through photography. Whether you&apos;re
                        looking for a skilled developer or just interested in
                        exploring my portfolio, I invite you to take a closer
                        look and see how I can help bring your ideas to life
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
                    <div className='flex flex-col gap-16 mt-6'>
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
