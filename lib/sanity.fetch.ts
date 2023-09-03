import 'server-only';

import type { QueryParams } from '@sanity/client';
import { client } from 'lib/sanity.client';
import {
  blogPaths,
  blogsBySlugQuery,
  blogsQuery,
  homePageQuery,
  homePageTitleQuery,
  projectBySlugQuery,
  projectPaths,
  projectsQuery,
  settingsQuery,
} from 'lib/sanity.queries';
import { draftMode } from 'next/headers';
import type {
  BlogPayload,
  BlogsPayload,
  HomePagePayload,
  ProjectPayload,
  ProjectsPayload,
  SettingsPayload,
} from 'types';

import { revalidateSecret } from './sanity.api';

export const token = process.env.SANITY_API_READ_TOKEN;

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error(
      'The `SANITY_API_READ_TOKEN` environment variable is required.',
    );
  }

  // @TODO this won't be necessary after https://github.com/sanity-io/client/pull/299 lands
  const sanityClient =
    client.config().useCdn && isDraftMode
      ? client.withConfig({ useCdn: false })
      : client;
  return sanityClient.fetch<QueryResponse>(query, params, {
    // We only cache if there's a revalidation webhook setup
    cache: revalidateSecret ? 'force-cache' : 'no-store',
    ...(isDraftMode && {
      cache: undefined,
      token: token,
      perspective: 'previewDrafts',
    }),
    next: {
      ...(isDraftMode && { revalidate: 30 }),
      tags,
    },
  });
}

export function getSettings() {
  return sanityFetch<SettingsPayload>({
    query: settingsQuery,
    tags: ['settings', 'home', 'blog', 'project'],
  });
}

export function getBlogBySlug(slug: string) {
  return sanityFetch<BlogPayload | null>({
    query: blogsBySlugQuery,
    params: { slug },
    tags: [`blog:${slug}`],
  });
}

export function getProjectBySlug(slug: string) {
  return sanityFetch<ProjectPayload | null>({
    query: projectBySlugQuery,
    params: { slug },
    tags: [`project:${slug}`],
  });
}

export function getHomePage() {
  return sanityFetch<HomePagePayload | null>({
    query: homePageQuery,
    tags: ['home', 'project', 'blog'],
  });
}

export function getBlogs() {
  return sanityFetch<BlogsPayload[] | null>({
    query: blogsQuery,
    tags: ['blog'],
  });
}

export function getProjects() {
  return sanityFetch<ProjectsPayload[] | null>({
    query: projectsQuery,
    tags: ['project'],
  });
}

export function getHomePageTitle() {
  return sanityFetch<string | null>({
    query: homePageTitleQuery,
    tags: ['home'],
  });
}

export function getBlogsPaths() {
  return client.fetch<string[]>(
    blogPaths,
    {},
    { token, perspective: 'published' },
  );
}
export function getProjectsPaths() {
  return client.fetch<string[]>(
    projectPaths,
    {},
    { token, perspective: 'published' },
  );
}
