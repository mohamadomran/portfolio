import { ArrowDownIcon } from '@sanity/icons';
import Link from 'next/link';

import { Resume } from '@/components/pages/work/Resume';
import { SOCIAL_LINKS } from '@/constants/constants';

export default async function About() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="text-5xl font-bold"> Work Experience!</h1>

      <Link
        className="flex h-6 items-center rounded-lg pb-8 pt-4 text-primary transition-all hover:text-primary-focus"
        href={SOCIAL_LINKS.CV}
      >
        <p>Download CV</p>

        <ArrowDownIcon className="h-4 w-4 stroke-primary" />
      </Link>

      <div className="my-6 flex flex-col items-center justify-center">
        <Resume />
      </div>
    </div>
  );
}
