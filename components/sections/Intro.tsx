import Image from 'next/image';
import Link from 'next/link';

import { SOCIAL_LINKS } from '@/constants/constants';
import avatar from '@/public/static/images/avatar.png';

import { ArrowDownIcon } from '../icons/ArrowDownIcon';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../icons/SocialIcons';
import { SocialLink } from '../ui/SocialLink';

export const Intro = () => {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">
            Hi! I&apos;m Mohamad!
          </h1>
          <h2 className="mb-4 text-base-content">
            Full-Stack Engineer based in{' '}
            <span className="font-semibold">Beirut 🇱🇧 </span>
          </h2>
          <p className="mb-4 text-base-content">
            Full-stack engineer with a passion for AI, machine learning, and
            capturing the world through photography.
          </p>
        </div>

        <div className="mr-auto h-[160px] w-[160px] flex-none rounded-full">
          <Image
            src={avatar}
            alt="avatar"
            priority
            placeholder="blur"
            className="aspect-square rounded-full border-4 border-primary bg-zinc-100 object-cover shadow-inner"
          />
        </div>
      </div>

      <Link
        className="flex h-6 items-center rounded-lg pb-8 pt-4 text-primary transition-all hover:text-primary-focus"
        href="/gallery"
      >
        <p>Check my photo gallery</p>

        <ArrowRightIcon className="stroke-primary" />
      </Link>

      <div className="flex items-center gap-6 ">
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
        <Link href={SOCIAL_LINKS.CV} className="btn-outline btn-primary btn">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-primary" />
        </Link>
      </div>
    </>
  );
};
