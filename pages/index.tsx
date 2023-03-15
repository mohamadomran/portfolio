import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
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
import { SEO_DESCRIPTION, SEO_TITLE } from '@/Utils/constants'
import avatar from '@/public/static/images/avatar.png'

export default function Home() {
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
                <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
                    <div className='lg:pr-20 lg:mt-10'>
                        <div className='max-w-xs px-2.5 lg:max-w-none'>
                            <Image
                                src={avatar}
                                alt=''
                                sizes='(min-width: 1024px) 32rem, 20rem'
                                className='aspect-square shadow-inner rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 border-4 border-mustard-500'
                                placeholder='blur'
                            />
                        </div>
                    </div>

                    <div className='max-w-4xl'>
                        <h1 className='text-5xl font-bold text-zinc-800 dark:sky-300 sm:text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-mustard-500 to-mustard-300'>
                            Hi, I&apos;m Mohamad!
                        </h1>
                        <p className='max-w-2xl text-xl mt-6 text-base text-zinc-600 dark:text-white'>
                            As an experienced full-stack software engineer
                            specializing in AI and machine learning, I am
                            committed to developing innovative solutions to
                            complex problems, and bringing fresh ideas to life
                            through technology. Outside of work, I enjoy
                            exploring new destinations with my camera, capturing
                            the beauty of the world through photography.If
                            you&apos;re in need of a talented developer or
                            simply interested in browsing my portfolio, I invite
                            you to take a closer look and discover how I can
                            help bring your ideas to fruition.
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
                </div>
            </Container>


            <Container className='mt-24 md:mt-28'>
                <div className='flex flex-col items-center justify-center my-6'>
                    <Resume />
                </div>
            </Container>
        </>
    )
}
