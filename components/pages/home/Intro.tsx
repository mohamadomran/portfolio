import Image from 'next/image';
import Link from 'next/link';

import { SocialLink } from '@/components/global/SocialLink';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { SOCIAL_LINKS } from '@/constants/constants';
import avatar from '@/public/static/images/avatar.png';

import { ArrowDownIcon } from '../../icons/ArrowDownIcon';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../../icons/SocialIcons';

export const Intro = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <Image
          src={avatar}
          alt="avatar"
          priority
          placeholder="blur"
          className="max-w-sm rounded-3xl border-4 border-primary shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi! I&apos;m Mohamad!</h1>
          <p className="py-6">
            A Full-stack engineer with a passion for AI, machine learning, and
            capturing the world through photography.
          </p>
          <Link
            className="group mt-4 inline-flex items-center gap-1 font-medium text-secondary transition-colors hover:text-primary"
            href="/gallery"
          >
            Check my photo gallery <ArrowRightIcon />
          </Link>
          <div className="mt-4 flex items-center gap-6">
            <SocialLink
              href={SOCIAL_LINKS.GITHUB}
              ariaLabel="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={SOCIAL_LINKS.LINKEDIN}
              ariaLabel="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href={SOCIAL_LINKS.TWITTER}
              ariaLabel="Follow on Twitter"
              icon={TwitterIcon}
            />
            <Link
              href={SOCIAL_LINKS.CV}
              className="btn-outline btn-primary btn"
            >
              Download CV
              <ArrowDownIcon className="h-4 w-4 stroke-primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
