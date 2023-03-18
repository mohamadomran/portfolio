import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
} from '@/components/icons/SocialIcons'
import { MailIcon } from '@/components/icons/MailIcon'
import awsCCPBadge from '@/public/static/images/aws-certified-cloud-practitioner-badge.png'
import { SEO_DESCRIPTION, SOCIAL_LINKS } from '@/Utils/constants'
import { IconType } from '@/types'

function SocialLink({
    className,
    href,
    children,
    icon: Icon,
}: IconType) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className='group flex text-md font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-zinc-500'>
                <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-500' />
                <span className='ml-4'>{children}</span>
            </Link>
        </li>
    )
}

export default function About() {
    return (
        <>
            <Head>
                <title>About - Mohamad Omran</title>
                <meta name='description' content={SEO_DESCRIPTION} />
                <meta property='og:title' content='About - Mohamad Omran' />
                <meta property='og:description' content={SEO_DESCRIPTION} />
            </Head>
            <Container className='mt-16 sm:mt-32'>
                <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>

                    <div className='lg:order-first lg:row-span-2'>
                        <h1 className='text-5xl font-bold text-zinc-800 dark:sky-300 sm:text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-mustard-500 to-mustard-300'>
                            About Me!
                        </h1>
                        <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-white'>
                            <p>
                                I&apos;m a Full Stack Engineer currently based
                                in Beirut, Lebanon. I have always been
                                fascinated by technology and coding, and I knew
                                from a young age that I wanted to pursue a
                                career in software engineering.
                            </p>
                            <p>
                                I obtained my Bachelor&apos;s and Master&apos;s
                                degrees in Science of Computer and Communication
                                Engineering, with a specialization in AI and
                                Machine Learning. Through my academic pursuits,
                                I gained a solid grounding in programming and a
                                thorough comprehension of AI and Machine
                                Learning methodologies, which have gained
                                immense relevance in the field of software
                                engineering.
                            </p>
                            <p>
                                After completing my academic qualifications, I
                                began my professional journey in software
                                development. With extensive experience in
                                full-stack web development, I have worked on
                                diverse projects for clients across the globe,
                                including governments and private corporations.
                                Notably, I contributed to the development of
                                cutting-edge software solutions for various
                                clients while working at <a className='underline text' href="https://speedlane.co">SpeedLane</a> (formerly
                                Postlight Lebanon).
                            </p>
                            <p>
                                In addition to my work as a software engineer,
                                I&apos;m also an avid traveler and photographer.
                                I love exploring new places, meeting new people,
                                and checking out different cultures.
                                I&apos;m always on the lookout for new
                                adventures to embark on.
                            </p>
                            <p>
                                I&apos;m constantly seeking new challenges and
                                opportunities to improve my skills and expand my
                                knowledge. I&apos;m passionate about using
                                technology to solve real-world problems, and I
                                believe that software engineering has the power
                                to change the world.
                            </p>
                        </div>
                    </div>
                    <div className='lg:pl-20'>
                        <ul role='list'>
                            <SocialLink
                                href={SOCIAL_LINKS.GITHUB}
                                icon={GitHubIcon}
                                className='mt-4'>
                                Follow on GitHub
                            </SocialLink>
                            <SocialLink
                                href={SOCIAL_LINKS.LINKEDIN}
                                icon={LinkedInIcon}
                                className='mt-4'>
                                Follow on LinkedIn
                            </SocialLink>
                            <SocialLink
                                href={SOCIAL_LINKS.TWITTER}
                                icon={TwitterIcon}
                                className='mt-4'>
                                Follow on Twitter
                            </SocialLink>
                            <SocialLink
                                href={SOCIAL_LINKS.EMAIL}
                                icon={MailIcon}
                                className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40'>
                            {SOCIAL_LINKS.EMAIL}
                            </SocialLink>
                        </ul>
                        <Link href='https://www.credly.com/badges/62b0dd07-a75e-400f-a2ea-f42243f42c90/public_url'>
                            <Image
                                src={awsCCPBadge}
                                width='170'
                                height='170'
                                alt='AWS Certified Cloud Practitioner'
                                className='mt-8'
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    )
}
