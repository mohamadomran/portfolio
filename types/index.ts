import type { PortableTextBlock } from '@portabletext/types';
import type { Image } from 'sanity';

export interface MilestoneItem {
  description?: string;
  duration?: {
    start?: string;
    end?: string;
  };
  image?: Image;
  tags?: string[];
  title?: string;
}

export interface ShowcaseProject {
  _type?: string;
  coverImage?: Image;
  overview?: PortableTextBlock[];
  site?: string;
  slug?: string;
  tags?: string[];
  title?: string;
}

export interface ShowcaseBlog {
  _type: string;
  coverImage?: Image;
  overview?: PortableTextBlock[];
  slug?: string;
  tags?: string[];
  title?: string;
}

export interface SettingsPayload {
  title?: string;
  url?: string;
  logo?: Image;
  email?: string;
  social?: {
    media?: string;
    url?: string;
  };
  description?: string;
  ogImage?: Image;
}

export interface HomePagePayload {
  footer?: PortableTextBlock[];
  overview?: PortableTextBlock[];
  showcaseProjects?: ShowcaseProject[];
  showcaseBlogs?: ShowcaseBlog[];
  title?: string;
}

export interface BlogPayload {
  body?: PortableTextBlock[];
  name?: string;
  overview?: PortableTextBlock[];
  title?: string;
  slug?: string;
}

export interface ProjectsPayload {
  projects?: ShowcaseProject[];
}

export interface BlogsPayload {
  blogs?: ShowcaseBlog[];
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
