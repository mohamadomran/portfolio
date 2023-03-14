import { ReactNode } from 'react';

export type ArticleLayout = {
    children?: ReactNode;
    isRssFeed: boolean;
    title: string;
    description: string;
    ogImage: string;
    date: string;
    slug: string;
};

export type SimpleLayout = {
    title: string;
    children: ReactNode;
    gradient: string;
};

export type Article = {
    slug: string;
    title: string;
    date: string;
    description: string;
};

export type Props = {
    className?: string;
    children?: ReactNode;
};

export type Repo = {
    name: string;
    description: string;
    url: string;
    stargazerCount: number;
    forkCount: number;
    primaryLanguage: {
        name: string;
        color: string;
    };
};
