import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { Props } from '@/types/Props';

export const MobileNavItem = ({ href, children }: { href: string } & Props) => {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
};
