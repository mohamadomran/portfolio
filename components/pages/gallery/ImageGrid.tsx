import Image from 'next/image';
import { Suspense } from 'react';

import { ImageProps } from '@/types/Image';

interface ImageGridProps {
  images: ImageProps[];
  setSelectedImg: (image: ImageProps) => void;
}

export default function ImageGrid({ images, setSelectedImg }: ImageGridProps) {
  return (
    <div className="mx-auto grid grid-cols-4 gap-8 ">
      {images.map((image) => (
        <div
          key={image._id}
          className="relative overflow-hidden rounded-xl px-0 py-[50%]"
          onClick={() => setSelectedImg(image)}
        >
          <Suspense fallback={<div className='absolute left-0 top-0 h-full w-full max-w-[150%] object-cover' />}>
            <Image
              src={image.image}
              alt={image.caption}
              width={400}
              height={400}
              placeholder="blur"
              blurDataURL={image.image}
              className="absolute left-0 top-0 h-full w-full max-w-[150%] object-cover"
            />
          </Suspense>
        </div>
      ))}
    </div>
  );
}
