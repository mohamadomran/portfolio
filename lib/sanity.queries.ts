import { groq } from 'next-sanity';

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  content,
  "slug": slug.current,
`;

const projectFields = groq`
  _id,
  featured,
  title,
  coverImage,
  description,
  url,
  technologies
`;

const galleryFields = groq`
  _id,
  caption,
  date,
  "image": image.asset->url,
  "dimensions": image.asset->metadata.dimensions
`;

export const settingsQuery = groq`*[_type == "settings"][0]`;

export const featuredBlogsQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc)  {
  ${postFields}
}`;

export const featuredProjectsQuery = groq`
*[_type == "project" && featured == true] {
  ${projectFields}
}`;

export const allBlogsQuery = groq`
{
  "post": *[_type == "post"] | order(_updatedAt desc) [0] {
    ${postFields}
  },
}`;

export const allProjectsQuery = groq`
*[_type == "project" ] {
  ${projectFields}
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const galleryQuery = groq`
*[_type == "gallery"] | order(date desc) {
  ${galleryFields}
}
`;
