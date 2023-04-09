import Link from 'next/link'
import Image from 'next/image'

import { SOCIAL_LINKS } from '@/constants/constants'
import { ArrowDownIcon } from '../icons/ArrowDownIcon'
import { ArrowRightIcon } from '../icons/ArrowRightIcon'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../icons/SocialIcons'
import { SocialLink } from '../ui/SocialLink'
import avatar from '@/public/static/images/avatar.png'

export const Intro = () => {
    return (
        <>
            <div className='flex flex-row items-start'>
                <div className='flex flex-col pr-8'>
                    <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1'>
                        Hi! I&apos;m Mohamad!
                    </h1>
                    <h2 className='mb-4 text-base-content'>
                        Full-Stack Engineer based in{' '}
                        <span className='font-semibold'>Beirut 🇱🇧 </span>
                    </h2>
                    <p className='mb-4 text-base-content'>
                        Full-stack engineer with a passion for AI, machine
                        learning, and capturing the world through photography.
                    </p>
                </div>

                <div className='w-[160px] h-[160px] mr-auto flex-none rounded-full'>
                    <Image
                        src={avatar}
                        alt='avatar'
                        priority
                        placeholder='blur'
                        className='aspect-square rounded-full border-4 border-primary bg-zinc-100 object-cover shadow-inner'
                    />
                </div>
            </div>

            <Link
                className='flex items-center pt-4 pb-8 text-primary rounded-lg hover:text-primary-focus transition-all h-6'
                href='/gallery'>
                <p>Check my photo gallery</p>

                <ArrowRightIcon className='stroke-primary' />
            </Link>

            <div className='flex items-center gap-6 '>
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
                <Link
                    href={SOCIAL_LINKS.CV}
                    className='btn btn-outline btn-primary'>
                    Download CV
                    <ArrowDownIcon className='h-4 w-4 stroke-primary' />
                </Link>
            </div>
        </>
    )
}
