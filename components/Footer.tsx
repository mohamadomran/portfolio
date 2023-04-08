import React from 'react';
import { OuterContainer, InnerContainer } from './Container';
import { SOCIAL_LINKS } from '@/Utils/constants';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './icons/SocialIcons';
import { SocialLink } from '@/components/ui/SocialLink';

export function Footer() {
    return (
        <footer className='mt-16'>
            <OuterContainer>
                <div className='border-t border-secondary pb-8'>
                    <InnerContainer>
                        <div className='flex flex-col items-center justify-between gap-6 mt-12'>
                            <div className='flex items-center gap-6'>
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
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-sm text-secondary'>
                                    &copy; {new Date().getFullYear()} Mohamad
                                    Omran. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </InnerContainer>
                </div>
            </OuterContainer>
        </footer>
    );
}
