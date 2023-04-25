import type { Image, PortableTextBlock } from 'sanity';

export interface ShowcaseProject {
  _type: string;
  coverImage?: Image;
  overview?: PortableTextBlock[];
  site?: string;
  tags?: string[];
  title?: string;
}

export interface GalleryItem {
  caption?: string;
  date?: string;
  image?: Image;
}

// Page payloads

export interface HomePagePayload {
  overview?: PortableTextBlock[];
  showcaseProjects?: ShowcaseProject[];
  title?: string;
}

export interface BlogPagePayload {
  body?: PortableTextBlock[];
  name?: string;
  overview?: PortableTextBlock[];
  title?: string;
}

export interface ProjectPayload {
  client?: string;
  coverImage?: Image;
  description?: PortableTextBlock[];
  duration?: {
    start?: string;
    end?: string;
  };
  overview?: PortableTextBlock[];
  site?: string;
  slug: string;
  tags?: string[];
  title?: string;
}

export interface SettingsPayload {
  ogImage?: Image;
}

export interface PorjectsPagePayload {
  projectsItems?: ProjectPayload[];
}
export interface ProjectsPayload {
  _type: string;
  caption?: string;
  date?: string;
  image?: Image;
}
[];

export interface GalleryPagePayload {
  galleryItems?: GalleryItem[];
}

export interface GalleryPayload {
  _type: string;
  caption?: string;
  date?: string;
  image?: Image;
}
[];
