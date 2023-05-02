import { DesktopNavigation } from '../navigation/DesktopNavigation';
import { MobileNavigation } from '../navigation/MobileNavigation';

export function Header() {
  return (
    <>
      <header className="pointer-events-none relative sticky top-0 z-50">
        <div className="top-0 z-10 flex h-16 justify-end pb-16 pt-6 md:justify-center">
          <DesktopNavigation className="pointer-events-auto hidden md:block" />
          <MobileNavigation className="pointer-events-auto pr-4 md:hidden" />
        </div>
      </header>
    </>
  );
}
