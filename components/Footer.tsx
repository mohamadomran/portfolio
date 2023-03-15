import React from 'react';
import { OuterContainer, InnerContainer } from './Container';
import { NavLink } from '@/components/ui/Navigation';
import { SocialLink } from '@/components/ui/SocialLink';
import {
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
} from '@/components/icons/SocialIcons';
import { SOCIAL_LINKS } from '@/Utils/constants';
import { MailIcon } from './icons/MailIcon';

export function Footer() {
    return (
        <footer className='mt-32'>
            <OuterContainer>
                <div className='border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40'>
                    <InnerContainer>
                        <div className='flex flex-col items-center justify-between gap-6 mt-12'>
                            <div className='flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
                                <NavLink href='/'>Home</NavLink>
                                <NavLink href='/about'>About</NavLink>
                                <NavLink href='/work'>Work</NavLink>
                                <NavLink href='/writing'>Writing</NavLink>
                                <NavLink href='/projects'>Projects</NavLink>
                                {/* <NavLink href='/snippets'>Snippets</NavLink> */}
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                                    &copy; {new Date().getFullYear()} Mohamad
                                    Omran. All rights reserved.
                                </p>
                                <div className='mx-auto mt-6 flex gap-6'>
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
                                </div>
                            </div>
                        </div>
                    </InnerContainer>
                </div>
            </OuterContainer>
        </footer>
    );
}
