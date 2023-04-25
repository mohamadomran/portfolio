import Image from 'next/image';

import ScrollUp from '@/components/global/ScrollUp';
import { formatDate } from '@/lib/formatDate';
import { urlForImage } from '@/lib/sanity.image';
import type { GalleryItem } from '@/types';

export function GalleryPage({ images = [] }: { images?: GalleryItem[] }) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-4xl font-bold sm:text-5xl">
          Gallery
        </h2>

        <p className="mt-4 max-w-md">
          A collection of my favorite photos taken by my S22 Ultra.
        </p>
      </header>
      {images && (
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(({ image, date, caption }, key) => {
            const imageUrl =
              image && urlForImage(image)?.height(2000).width(3000).url();

            return (
              <div
                key={key}
                className="block overflow-hidden group rounded-lg mt-8"
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
    </div>
  );
}
