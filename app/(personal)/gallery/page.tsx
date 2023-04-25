import { notFound } from 'next/navigation';

import { GalleryPage } from '@/components/pages/gallery/GalleryPage';
import { GalleryPreview } from '@/components/pages/gallery/GalleryPreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getGalleryPage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';
import { GalleryItem } from '@/types';

export default async function Gallery() {
  const token = getPreviewToken();
  const images = (await getGalleryPage({ token })) || [];

  if (!images && !token) {
    notFound();
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <GalleryPage images={images! as unknown as Array<GalleryItem>} />
            </PreviewWrapper>
          }
        >
          <GalleryPreview token={token} />
        </PreviewSuspense>
      ) : (
        <GalleryPage images={images! as unknown as Array<GalleryItem>} />
      )}
    </>
  );
}
