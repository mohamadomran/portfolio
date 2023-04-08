import React from 'react';
import { OuterContainer, InnerContainer } from './Container';
import { SOCIAL_LINKS } from '@/Utils/constants';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './icons/SocialIcons';
import { SocialLink } from '@/components/ui/SocialLink';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { Button } from './ui/Button';

export function Footer() {
    return (
        <footer className='mt-16'>
            <OuterContainer>
                <div className='border-t border-secondary pb-8'>
                    <InnerContainer>
                        <div className='flex flex-col items-center justify-between gap-6 mt-12'>

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
