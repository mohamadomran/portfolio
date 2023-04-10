import Image from 'next/image';

import { urlForImage } from '@/lib/sanity.image';
import type { Author } from '@/lib/sanity.queries';

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props;
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={urlForImage(picture).height(96).width(96).fit('crop').url()}
          className="rounded-full"
          height={96}
          width={96}
          alt="avatar"
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
