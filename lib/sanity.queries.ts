import { groq } from 'next-sanity';

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      site,
      tags,
      title,
    },
    title,
  }
`;

export const projectsPageQuery = groq`
  *[_type == "project"]{
    _type,
    coverImage,
    overview,
    site,
    tags,
    title,
  }
`;

export const galleryPageQuery = groq`
  *[_type == "gallery"]{
      caption,
      date,
      image,
  }
`;

export const pagesBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    slug,
    title,
  }
`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    ogImage,
  }
`;
