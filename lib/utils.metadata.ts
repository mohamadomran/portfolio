import { Metadata } from 'next';

import { getSettings } from './sanity.fetch';
import { urlForImage } from './sanity.image';

export async function sharedMetadata(): Promise<Metadata> {
  const settings = await getSettings();

  const imageUrl =
    settings.openGraphImage &&
    urlForImage(settings.openGraphImage)?.width(800).height(600).url();

  return {
    title: {
      default: settings?.title || 'Portfolio | Mohamad Omran',
      template: '%s | Mohamad Omran',
    },
    description: settings?.description,
    keywords: [
      'Portfolio',
      'Blog',
      'Digital Garden',
      'Fullstack Engineer',
      'Full-stack Engineer',
      'Sanity',
      'NextJS',
    ],
    authors: [{ name: 'Mohamad Omran' }],
    themeColor: '#000',
    openGraph: {
      images: [
        {
          url: imageUrl || '/img/opengraph.jpg',
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      title: settings?.title || 'Portfolio | Mohamad Omran',
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
    },
  } satisfies Metadata;
}
