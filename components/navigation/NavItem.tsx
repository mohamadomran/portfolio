'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Props } from '@/types/Props';

export const NavItem = ({ href, children }: { href: string } & Props) => {
  const pathname = usePathname();
  let isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive ? 'text-secondary' : 'hover:link-hover',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r" />
        )}
      </Link>
    </li>
  );
};
