import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon';
import { Layout } from '@/components/layouts/Layout';
import { Resume } from '@/components/pages/work/Resume';
import { SOCIAL_LINKS, WORK_SEO_DESCRIPTION, WORK_SEO_TITLE } from '@/constants/constants';

export default function Work() {
  return (
    <Layout>
      <NextSeo
        title={WORK_SEO_TITLE}
        description={WORK_SEO_DESCRIPTION}
      />
      <div className="flex flex-col pr-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">
          Work Experience
        </h1>
      </div>
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
    </Layout>
  );
}
