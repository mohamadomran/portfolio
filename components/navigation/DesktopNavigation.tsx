import { pages } from '@/constants/constants';
import { Props } from '@/types/Props';

import { NavItem } from './NavItem';

export function DesktopNavigation(props: Props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-2xl bg-base-100/70 px-4 text-lg  shadow-lg ring-1 ring-secondary backdrop-blur">
        {pages.map(({ name, link }) => (
          <NavItem key={name} href={link}>
            {name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
