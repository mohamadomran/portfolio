import Image from 'next/image'

import { urlForImage } from '@/lib/sanity.image'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 3000,
  height = 1800,
  classesWrapper,
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).url()

  return (
    <div
      className={`overflow-hidden ${classesWrapper}`}
    >
      {imageUrl && (
        <Image
          className="aspect-rectangle h-full w-full object-cover"
          alt={alt}
          width="1500"
          height="1400"
          src={imageUrl}
        />
      )}
    </div>
  )
}
