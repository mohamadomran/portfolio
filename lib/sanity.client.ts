import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api';
import {
  allBlogsQuery,
  featuredBlogsQuery,
  featuredProjectsQuery,
  postBySlugQuery,
  postSlugsQuery,
  settingsQuery,
} from 'lib/sanity.queries';
import { createClient } from 'next-sanity';

import { type Post } from '@/types/Post';
import { type Project } from '@/types/Project';
import { type Settings } from '@/types/Settings';

const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {};
  }
  return {};
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(featuredBlogsQuery)) || [];
  }
  return [];
}

export async function getAllProjects(): Promise<Project[]> {
  if (client) {
    return (await client.fetch(featuredProjectsQuery)) || [];
  }
  return [];
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null,
): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    });
    return await client.fetch(allBlogsQuery, { slug });
  }
  return { post: null as any, morePosts: [] };
}
