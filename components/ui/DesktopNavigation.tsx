import { Props } from '@/types/Props';
import { NavItem } from './NavItem';
import { pages } from '@/constants/constants';

export function DesktopNavigation(props: Props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/10 px-4 text-lg font-medium shadow-lg ring-primary ring-1 backdrop-blur transition">
        {pages.map(({ name, link }) => (
          <NavItem key={name} href={link}>
            {name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
