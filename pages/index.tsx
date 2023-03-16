import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components/Container';
import {
GitHubIcon,
LinkedInIcon,
TwitterIcon,
} from '@/components/icons/SocialIcons';
import { MailIcon } from '@/components/icons/MailIcon';

import { SocialLink } from '@/components/ui/SocialLink';

import { SEO_DESCRIPTION, SEO_TITLE, SOCIAL_LINKS } from '@/Utils/constants';
import avatar from '@/public/static/images/avatar.png';
import { Button } from '@/components/ui/Button';
import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon';

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
                        <p className='max-w-2xl text-l mt-6 text-base text-zinc-600 dark:text-white'>
                            As an experienced full-stack software engineer
                            specializing in AI and machine learning, I am
                            committed to developing innovative solutions to
                            complex problems, and bringing fresh ideas to life
                            through technology. Outside of work, I enjoy
                            exploring new destinations with my camera, capturing
                            the beauty of the world through photography. Whether
                            you&apos;re seeking a skilled developer or just
                            curious to peruse my portfolio, I welcome you to
                            explore my work and learn how I can help transform
                            your ideas into tangible outcomes
                        </p>
                        <div className='flex gap-6 items-center'>
                            <SocialLink
                                href={SOCIAL_LINKS.GITHUB}
                                ariaLabel='Follow on GitHub'
                                icon={GitHubIcon}
                            />
                            <SocialLink
                                href={SOCIAL_LINKS.LINKEDIN}
                                ariaLabel='Follow on LinkedIn'
                                icon={LinkedInIcon}
                            />
                            <SocialLink
                                href={SOCIAL_LINKS.TWITTER}
                                ariaLabel='Follow on Twitter'
                                icon={TwitterIcon}
                            />
                            <SocialLink
                                href={SOCIAL_LINKS.EMAIL}
                                ariaLabel='Send me an Email'
                                icon={MailIcon}
                            />
                            <Button
                                href={SOCIAL_LINKS.CV}
                                className='group mt-6 hover:bg-mustard-500 dark:hover:bg-mustard-500 text-white-100 hover:text-black-950 ring ring-mustard-300'>
                                Download CV
                                <ArrowDownIcon className='h-4 w-4 stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
