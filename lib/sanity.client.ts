import 'server-only';

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '@/lib/sanity.api';
import {
  galleryPageQuery,
  homePageQuery,
  pagesBySlugQuery,
  projectsPageQuery,
  settingsQuery,
} from '@/lib/sanity.queries';
import type {
  BlogPagePayload,
  GalleryPagePayload,
  HomePagePayload,
  SettingsPayload,
} from '@/types';

export const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null;
};

export async function getHomePage({
  token,
}: {
  token?: string;
}): Promise<HomePagePayload | undefined> {
  return await sanityClient(token)?.fetch(homePageQuery);
}

export async function getProjectsPage({
  token,
}: {
  token?: string;
}): Promise<GalleryPagePayload | undefined> {
  return await sanityClient(token)?.fetch(projectsPageQuery);
}

export async function getGalleryPage({
  token,
}: {
  token?: string;
}): Promise<GalleryPagePayload | undefined> {
  return await sanityClient(token)?.fetch(galleryPageQuery);
}

export async function getBlogBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string;
}): Promise<BlogPagePayload | undefined> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug });
}

export async function getSettings({
  token,
}: {
  token?: string;
}): Promise<SettingsPayload | undefined> {
  return await sanityClient(token)?.fetch(settingsQuery);
}
