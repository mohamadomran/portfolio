import { createClient, groq } from 'next-sanity';
import { Project } from '@/types/Project';
import { Page } from '@/types/Page';
import { Blog } from '@/types/Blog';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
};

export async function getFeaturedProject(): Promise<Project[]> {
  return createClient(config).fetch(
    groq`*[_type == "project" && featured == true]{
        _id,
        _createdAt,
        name,
        "image": image.asset->url,
        url,
        content
      }`,
  );
}

export async function getBlogs(): Promise<Blog[]> {
  return createClient(config).fetch(
    groq`*[_type == "blog"]{
        _id,
        _createdAt,
        title,
        slug,
        "image": image.asset->url,
        content
      }`,
  );
}

export async function getBlog(slug: string): Promise<Project> {
  return createClient(config).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "image": image.asset->url,
        url,
        content
      }`,
    { slug },
  );
}

export async function getProjects(): Promise<Project[]> {
  return createClient(config).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "image": image.asset->url,
        url,
        content
      }`,
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "image": image.asset->url,
        url,
        content
      }`,
    { slug },
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(config).fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
      }`,
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(config).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
      }`,
    { slug },
  );
}
