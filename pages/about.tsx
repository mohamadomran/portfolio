import Image from 'next/image'
import { ElementType, ReactNode } from 'react'
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
import avatar from '@/public/static/images/avatar.jpg'
import awsCCPBadge from '@/public/static/images/aws-certified-cloud-practitioner-badge.png'

function SocialLink({
    className,
    href,
    children,
    icon: Icon,
}: {
    className: string
    href: string
    children: ReactNode
    icon: ElementType
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className='group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500'>
                <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500' />
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
                <meta
                    name='description'
                    content="I'm Mohamad! Welcome to my portfolio! Im a full-stack engineer with a passion for AI, machine learning, travel, and photography. Explore my comprehensive portfolio to see how I bring creativity and innovation to software development. Let's collaborate and bring your ideas to life!"
                />
                <meta property='og:title' content='About - Mohamad Omran' />
                <meta
                    property='og:description'
                    content="I'm Mohamad! Welcome to my portfolio! Im a full-stack engineer with a passion for AI, machine learning, travel, and photography. Explore my comprehensive portfolio to see how I bring creativity and innovation to software development. Let's collaborate and bring your ideas to life!"
                />
            </Head>
            <Container className='mt-16 sm:mt-32'>
                <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
                    <div className='lg:pl-20'>
                        <div className='max-w-xs px-2.5 lg:max-w-none'>
                            <Image
                                src={avatar}
                                alt=''
                                sizes='(min-width: 1024px) 32rem, 20rem'
                                className='aspect-square shadow-inner rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 rotate-3'
                                placeholder='blur'
                            />
                        </div>
                    </div>
                    <div className='lg:order-first lg:row-span-2'>
                        <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-blue-400 to-emerald-400'>
                            I&apos;m Mohamad! Welcome to my portfolio!
                        </h1>
                        <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
                            <p>
                                I&apos;m a Full Stack Engineer currently based
                                in Beirut, Lebanon. I have always been
                                fascinated by technology and coding, and I knew
                                from a young age that I wanted to pursue a
                                career in software engineering.
                            </p>
                            <p>
                                I earned both my Bachelor&apos;s and
                                Master&apos;s degrees in Science of Computer and
                                Communication Engineering, with an emphasis on
                                AI and Machine Learning. During my studies, I
                                developed a strong foundation in computer
                                science and gained a deep understanding of AI
                                and Machine Learning techniques, which have
                                become increasingly important in the world of
                                software engineering.
                            </p>
                            <p>
                                After completing my studies, I began my career
                                in software development. I gained extensive
                                experience in full-stack web development,
                                working on a variety of projects for clients
                                around the world. One of my most notable
                                accomplishments was my work at SpeedLane
                                (formerly known as Postlight Lebanon), where I
                                helped develop innovative software solutions for
                                a wide range of clients.
                            </p>
                            <p>
                                In addition to my work as a software engineer,
                                I&apos;m also an avid traveler and photographer.
                                I love exploring new places, meeting new people,
                                and capturing the beauty of the world through my
                                lens. Some of my favorite travel destinations
                                include Europe, Asia, and South America, and
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
                                href='https://github.com/mohamadomran'
                                icon={GitHubIcon}
                                className='mt-4'>
                                Follow on GitHub
                            </SocialLink>
                            <SocialLink
                                href='https://linkedin.com/in/mohamad-omran/'
                                icon={LinkedInIcon}
                                className='mt-4'>
                                Follow on LinkedIn
                            </SocialLink>
                            <SocialLink
                                href='https://twitter.com/itsMohamadOmran'
                                icon={TwitterIcon}
                                className='mt-4'>
                                Follow on Twitter
                            </SocialLink>
                            <SocialLink
                                href='mailto:hi@mohamadomran.dev'
                                icon={MailIcon}
                                className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40'>
                                hi@mohamadomran.dev
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
