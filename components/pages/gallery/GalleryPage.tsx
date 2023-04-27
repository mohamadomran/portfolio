import Image from 'next/image';

import { Layout } from '@/components/global/Layout';
import ScrollUp from '@/components/global/ScrollUp';
import { formatDate } from '@/lib/formatDate';
import { urlForImage } from '@/lib/sanity.image';
import type { GalleryItem } from '@/types';

export function GalleryPage({ images = [] }: { images?: GalleryItem[] }) {
  return (
    <Layout>
      <header>
        <h1 className="text-5xl font-bold">Gallery</h1>
        <p className="py-6 text-xl font-bold">
          A collection of my favorite photos taken by my S22 Ultra.
        </p>
      </header>
      {images && (
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(({ image, date, caption }, key) => {
            const imageUrl =
              image && urlForImage(image)?.height(2000).width(3000).url();

            return (
              <div
                key={key}
                className="group mt-8 block overflow-hidden rounded-2xl"
              >
                <Image
                  height={400}
                  width={600}
                  src={imageUrl!}
                  alt={caption!}
                  className="h-[150px] w-full object-cover sm:h-[350px]"
                />
              </div>
            );
          })}
        </div>
      )}

      <ScrollUp />
    </Layout>
  );
}
