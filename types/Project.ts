import { PortableTextBlock } from 'sanity';

export type Project = {
    _id: string;
    createdAt: Date;
    name: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
};
