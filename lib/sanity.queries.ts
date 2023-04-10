import { groq } from 'next-sanity';

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
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

export const settingsQuery = groq`*[_type == "settings"][0]`;

export const featuredBlogsQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc)  {
  ${postFields}
}`;

export const featuredProjectsQuery = groq`
*[_type == "project"] {
  ${projectFields}
}`;

export const allBlogsQuery = groq`
{
  "post": *[_type == "post"] | order(_updatedAt desc) [0] {
    ${postFields}
  },
}`;

export const allProjectsQuery = groq`
{
  "post": *[_type == "project" ] | order(_updatedAt desc) [0] {
    ${postFields}
  },
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
