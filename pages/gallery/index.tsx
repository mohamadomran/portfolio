import { PreviewSuspense } from 'next-sanity/preview';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { Layout } from '@/components/layouts/Layout';
import ImageGrid from '@/components/pages/gallery/ImageGrid';
import Modal from '@/components/pages/gallery/Modal';
import { GALLERY_SEO_TITLE } from '@/constants/constants';
import { fetchGallery } from '@/lib/sanity.client';
import { ImageProps } from '@/types/Image';

import Loading from './loading';

interface GalleryProps {
  images: ImageProps[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImg, setSelectedImg] = useState<ImageProps | null>(null);

  return (
    <Layout>
      <NextSeo title={GALLERY_SEO_TITLE} />
      <div className="max-w-full">
        <PreviewSuspense fallback={<Loading />}>
          <ImageGrid images={images} setSelectedImg={setSelectedImg!} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg!} />
          )}
        </PreviewSuspense>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const images = await fetchGallery();

  return {
    props: {
      images,
    },
    revalidate: 1,
  };
}
