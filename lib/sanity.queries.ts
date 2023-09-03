import { groq } from 'next-sanity';

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    showcaseBlogs[]->{
     _type,
     overview,
     "slug": slug.current,
     tags,
     title,
    },
  }
`;

export const projectsQuery = groq`
  *[_type == "project"]{
    _id,
    _type,
    coverImage,
    overview,
    site,
    tags,
    title,
}`;

export const blogsQuery = groq`
  *[_type == "blog"]{
    _id,
    _type,
    overview,
    site,
    tags,
    title,
}`;

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`;

export const blogsBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`;

export const projectPaths = groq`
  *[_type == "project" && slug.current != null].slug.current
`;

export const blogPaths = groq`
  *[_type == "blog" && slug.current != null].slug.current
`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    title,
    url,
    logo,
    email,
    social,
    description,
    ogImage
  }
`;
