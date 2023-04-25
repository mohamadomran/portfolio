'use client';

import { usePreview } from '@/lib/sanity.preview';
import { galleryPageQuery } from '@/lib/sanity.queries';
import type { GalleryItem, GalleryPayload } from '@/types';

import { GalleryPage } from './GalleryPage';

export function GalleryPreview({ token }: { token: null | string }) {
  const gallery: GalleryPayload = usePreview(token, galleryPageQuery);

  return <GalleryPage images={gallery! as unknown as Array<GalleryItem>} />;
}
