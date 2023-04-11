import { ImageResponse } from '@vercel/og';
import { apiVersion, dataset, projectId } from 'lib/sanity.api';
import type { NextRequest, NextResponse } from 'next/server';
import type { PageConfig } from 'next/types';
import { createClient } from 'next-sanity';

export const config: PageConfig = { runtime: 'edge' };

import { settingsQuery } from 'lib/sanity.queries';

import {
  height,
  OpenGraphImage,
  width,
} from '@/components/pages/sanity/OpenGraphImage';
import { Settings } from '@/types/Settings';

export default async function og(req: NextRequest, res: NextResponse) {
  const font = fetch(
    new URL('public/fonts/JetBrainsMono.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());
  const { searchParams } = new URL(req.url);

  let title = searchParams.get('title');
  if (!title) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    });
    const settings = (await client.fetch<Settings>(settingsQuery)) || {};
    title = settings?.ogImage?.title || '';
  }

  return new ImageResponse(<OpenGraphImage title={title || ''} />, {
    width,
    height,
    fonts: [
      {
        name: 'Inter',
        data: await font,
        style: 'normal',
        weight: 700,
      },
    ],
  });
}
