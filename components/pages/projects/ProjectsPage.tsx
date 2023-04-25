'use client';

import Image from 'next/image';
import Link from 'next/link';

import ScrollUp from '@/components/global/ScrollUp';
// import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { CustomPortableText } from '@/components/shared/CustomPortableText';
import { urlForImage } from '@/lib/sanity.image';
import type { ProjectPayload } from '@/types';

export function ProjectsPage({
  projects = [],
}: {
  projects?: ProjectPayload[];
}) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-4xl font-bold sm:text-5xl">Projects</h2>

        <p className="mt-4 max-w-md">Projects that I&apos;ve Worked On</p>
        {/* <Link
          className="flex h-6 items-center rounded-lg pb-8 pt-4 text-primary transition-all hover:text-primary-focus"
          href="/projects/github"
        >
          <p>My Github Projects</p>

          <ArrowRightIcon className="stroke-primary" />
        </Link> */}
      </header>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {projects &&
          projects.map(({ coverImage, overview, site, title }, key) => {
            const imageUrl =
              coverImage &&
              urlForImage(coverImage)?.height(1800).width(3000).fit('min').url();

            return (
              <div
                key={key}
                className="card-compact mt-8 overflow-hidden rounded-xl bg-primary-content shadow-sm"
              >
                <Image
                  src={imageUrl!}
                  alt={title!}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="aspect-rectangle h-auto w-full rounded-xl object-cover"
                />
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <span className="h-[140px] text-sm">
                    <CustomPortableText value={overview!} />
                  </span>

                  <div className="card-actions mt-4 justify-end">
                    <Link className="btn-secondary btn" href={site!}>
                      Check {title}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <ScrollUp />
    </div>
  );
}
