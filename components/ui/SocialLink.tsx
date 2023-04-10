import Link from 'next/link';

import { SocialLink } from '@/types/SocialLink';

export function SocialLink({
  icon: Icon,
  href,
  ariaLabel,
  className,
}: SocialLink) {
  return (
    <Link className="group my-4" href={href} aria-label={ariaLabel}>
      <Icon
        className="h-6 w-6
                fill-white
                transition
                group-hover:fill-primary"
      />
    </Link>
  );
}
