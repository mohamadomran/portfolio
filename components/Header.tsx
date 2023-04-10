import { DesktopNavigation } from './ui/DesktopNavigation';
import { MobileNavigation } from './ui/MobileNavigation';

export function Header() {
  return (
    <>
      <header className="pointer-events-none relative sticky top-0">
        <div className="top-0 z-10 flex h-16 justify-end pb-16 pr-12 pt-6 md:justify-center md:pb-24 md:pr-0">
          <DesktopNavigation className="pointer-events-auto hidden md:block" />
          <MobileNavigation className="pointer-events-auto md:hidden" />
        </div>
      </header>
    </>
  );
}
